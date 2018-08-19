export const configureStore =
  process.env.NODE_ENV === 'production'
    ? require('./configureStore.prod').configureStore
    : require('./configureStore.dev').configureStore;
