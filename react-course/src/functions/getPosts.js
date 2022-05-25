const getPosts = (start, end, state) => {
  fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((data) => {
      state([...data].slice(start, end));
    });
};

export { getPosts };
