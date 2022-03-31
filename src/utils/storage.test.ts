import { del, get, set } from '@utils/storage.utils';
import { LocalStorageMock } from '@src/mock/tests';

const KEY = 'foo';
const VALUE = 'bar';

describe('Storage functions', () => {
  const originalLocalStorage = window.localStorage;

  beforeAll(() => {
    (window as any).localStorage = new LocalStorageMock();
  });

  afterAll(() => {
    (window as any).localStorage = originalLocalStorage;
  });

  it('set check set data to localStorage', () => {
    set(KEY, VALUE);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, `${'"bar"'}`);
  });

  it('get check get data from localStorage', () => {
    get(KEY);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });

  it('del check delete data from localStorage', () => {
    del(KEY);

    expect(localStorage.removeItem).toHaveBeenLastCalledWith(KEY);
  });
});
