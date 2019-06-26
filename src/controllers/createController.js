import createStore from '@/store/createStore';

// eslint-disable-next-line
let counter = 0;

export default function(ModuleClass, params) {
  // eslint-disable-next-line
  const { name } = ModuleClass.prototype.__proto__.constructor;

  // eslint-disable-next-line
  counter++;

  const store = createStore();

  const moduleInstance = new ModuleClass(
    {
      store,
      name: `${name}-${counter}`,
    },
    params,
  );
  return moduleInstance;
}
