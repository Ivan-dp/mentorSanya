function addItem(e, arr, obj, set) {
  if (obj.title.length > 0) {
    set([...arr, obj]);
  }
  e.preventDefault();
}

export { addItem };
