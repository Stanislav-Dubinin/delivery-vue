export const getUrl = (name, url) => {
  return new URL(`../assets/images/${url}/${name}`, import.meta.url);
};
