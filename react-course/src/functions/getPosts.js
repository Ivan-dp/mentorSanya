const getPosts = function () {
  return fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((posts) => posts.slice(0, 37));
};

export { getPosts };
