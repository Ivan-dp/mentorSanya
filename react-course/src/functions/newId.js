const newId = (arr) => {
  let ident;
  if (arr.length != 0) {
    ident = arr[arr.length - 1].id + 1;
  } else {
    ident = 0;
  }
  console.log(ident);
  return ident;
};

export { newId };
