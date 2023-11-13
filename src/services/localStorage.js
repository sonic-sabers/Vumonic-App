import AsyncStorage from '@react-native-async-storage/async-storage';
export const set = (key, value) => AsyncStorage.setItem('@' + key, value);
export const mergeItem = (key, value) =>
  AsyncStorage.mergeItem('@' + key, value);
export const get = key => AsyncStorage.getItem('@' + key);

export const remove = key => AsyncStorage.removeItem('@' + key);
