import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

interface Storage {
  getItem: () => Promise<null>;
  setItem: (_key: string, value: string) => Promise<string>;
  removeItem: () => Promise<void>;
}
const createNoopStorage = (): Storage => {
  return {
    getItem(): Promise<null> {
      return Promise.resolve(null);
    },
    setItem(_key, value): Promise<string> {
      return Promise.resolve(value);
    },
    removeItem(): Promise<void> {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

export default storage;
