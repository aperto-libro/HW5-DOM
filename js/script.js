let buttonLogin = document.querySelector('#button');

buttonLogin.addEventListener('click', addUserDataToLocalStorage);

function addUserDataToLocalStorage() {
  let userNameInput = document.querySelector('#username').value;
  let userPasswordInput = document.querySelector('#pass').value;

  localStorage.setItem('username', userNameInput);
  localStorage.setItem('password', userPasswordInput);

  let element = document.createElement('div');
  element.innerHTML = `Username: <span class="spanText">${userNameInput}</span>, Password: <span class="spanText">${userPasswordInput}</span>`;
  document.body.appendChild(element);
  element.classList.add('data');
  // preventDefault();

  buttonLogin.removeEventListener('click', addUserDataToLocalStorage);
}
