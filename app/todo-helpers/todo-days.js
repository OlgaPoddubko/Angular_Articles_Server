export default () => created => {
  return Math.floor((Date.now() - Date.parse(created)) / 86400000);
};
