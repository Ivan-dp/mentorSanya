async function get77() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await response.json();
  posts = posts.splice(76, 1);
  let postlist = document.querySelector('.post-list');
  for (let post in posts) {
    postlist.innerHTML += `
          <li class="post">
              <h4>${posts[post].id}. ${posts[post].title}</h4>
              <p>${posts[post].body}</p>
          </li>
      `;
  }
}

export { get77 };
