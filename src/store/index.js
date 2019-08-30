// @ts-check
import createStoreModule from '@/store/createStoreModule';
import createStore from '@/store/createStore';

import Web3Module from '@/store/modules/Web3Module';
import ConnectModule from '@/store/modules/ConnectModule';

const store = createStore();

/**
 * Create vuex class module registered in the store
 * @template T
 * @param {
    new (params: import('vuex-class-modules').RegisterOptions) => T
  } Module Vuex class module
 * @param {string} name Module name
 */
const createModule = (Module, name) => createStoreModule(store, Module, name);

export const web3Store = createModule(Web3Module, 'web3');
export const connectStore = createModule(ConnectModule, 'connect');

export default store;
