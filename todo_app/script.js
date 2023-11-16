const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const posts = document.getElementById('posts');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submited');

  form_Validation();
});

function form_Validation() {
  if (input.value === '') {
    msg.innerHTML = 'Post Not Found';
    console.error('Failure');
  } else {
    accept_Data();

    msg.innerHTML = '';
    console.log('Success');
  }
}

let data = {};

function accept_Data() {
  data['text'] = input.value;

  create_Post();

  console.table(data);
}

function create_Post() {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
  </div>`;

  input.value = '';
}

function editPost(e) {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}

function deletePost(e) {
  e.parentElement.parentElement.remove();
}
