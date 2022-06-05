function sortTodoItems(list, bool, set) {
  switch (bool) {
    case 'all':
      return list;
    case true:
      return set(list.filter((item) => item.checked === true));
    case false:
      return set(list.filter((item) => item.checked === false));
  }
}

export { sortTodoItems };
