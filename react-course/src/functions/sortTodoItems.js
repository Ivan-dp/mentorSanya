function sortTodoItems(list, bool) {
  let newArr = [];
  for (let i of list) {
    if (i.checked === bool) {
      newArr.push({ ...i });
    }
  }
  console.log(newArr);
  return newArr;
}

export { sortTodoItems };
