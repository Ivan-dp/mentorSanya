const getPostById = (id, state) => {
  if (id > 0) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => response.json())
      .then((data) => {
        state(data);
      });
  }
};

export { getPostById };
