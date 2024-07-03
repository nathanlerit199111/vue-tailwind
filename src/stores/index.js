import { createPinia } from 'pinia';

const pinia = createPinia();

// Reference: https://www.youtube.com/watch?v=MtSfJkilZPs
pinia.use((context) => {
  const storeID = context.store.$id;
  const serilizer = {
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  };

  // Sync store from localstorage
  const fromStorage = serilizer.deserialize(
    window.localStorage.getItem(`_${storeID.toUpperCase()}`)
  );

  if (fromStorage) {
    context.store.$patch(fromStorage);
  }

  // Listen for changes and update localstorage
  context.store.$subscribe((mutation, state) => {
    window.localStorage.setItem(
      `_${storeID.toUpperCase()}`,
      serilizer.serialize(state)
    );
  });
});

export default pinia;