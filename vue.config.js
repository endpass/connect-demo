/* eslint-disable no-console */
const path = require('path');
// eslint-disable-next-line
const webpack = require('webpack');
const buildUtils = require('@endpass/utils/build');
const objectUtils = require('@endpass/utils/objects');

const { SOURCE_MAP, NODE_ENV } = process.env;

const ENV = objectUtils.parseObjectProperties(process.env, 'VUE_APP');

console.log('NODE_ENV', NODE_ENV);
console.log('ENV', ENV);

module.exports = {
  productionSourceMap: false,

  publicPath: '',

  configureWebpack: {
    devtool: SOURCE_MAP && 'cheap-module-eval-source-map',

    plugins: [
      new webpack.DefinePlugin({
        ENV: JSON.stringify(ENV),
      }),
    ],
    output: {
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[hash:8].js',
    },
  },

  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/icons',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg',
        // spriteFilename: 'icons.[hash:8].svg', // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true,
      },
    },
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "./src/css/_settings.scss";',
      },
    },
    extract: {
      filename: '[name].[hash:8].css',
      chunkFilename: '[name].[hash:8].css',
    },
  },

  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, './src'));

    config.module.rule('svg-sprite').use('svgo-loader').loader('svgo-loader');

    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|ico)(\?.*)?$/)
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .options({
    //     limit: 1,
    //     name: '[name].[hash:8].[ext]',
    //   });
    //
    // config.module
    //   .rule('svg-sprite')
    //   .use('svgo-loader')
    //   .loader('svgo-loader');
    config.plugin('html').tap(args => {
      const options = Object.assign(args[0], {
        meta: {
          build: buildUtils.getCommitHash(),
        },
      });
      return [options];
    });

    config.plugins.delete('prefetch');

    if (ENV.VUE_APP_IS_E2E_CONNECT) {
      config.resolve.symlinks(ENV.VUE_APP_WITH_SYMLINKS);
    }
  },
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/identity/api/v1.1': {
        target: 'https://identity-dev.endpass.com',
        changeOrigin: true,
        pathRewrite: {
          '^/identity': '',
        },
        cookieDomainRewrite: 'localhost',
      },
    },
    // https: true,
  },

  outputDir: path.resolve(__dirname, './dist'),
};
