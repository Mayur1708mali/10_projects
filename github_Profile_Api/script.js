const main = document.getElementById('main');
const form = document.querySelector('form');
const profile = document.getElementById('profile');

const githubApi = 'https://api.github.com/users/';

async function getUser(user) {
  const res = await fetch(githubApi + user);
  const userData = await res.json();

  userCard(userData);
}

function userCard(user) {
  const card = `
  <div class="card">
    <div>
      <img src=${user.avatar_url} alt="profile pic" />
    </div>
    <div class="user_info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul class="info">
      <li><i class="fas fa-user-alt"></i> ${user.followers}</li>
      <li><i class="fas fa-users"></i> ${user.following}</li>
      <li><i class="fa-regular fa-folder"></i> ${user.public_repos}</li>
    </ul>
    </div>
  </div>
  `;

  main.innerHTML = card;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = profile.value;

  getUser(user);
});
