import createStore from '@/store/createStore';

export default function (Module, params = {}) {
  // eslint-disable-next-line
  const { name = 'DefaultController' } = Module.prototype.__proto__.constructor;
  const store = createStore();
  const moduleInstance = new Module(
    {
      store,
      name,
    },
    params,
  );

  return moduleInstance;
}
