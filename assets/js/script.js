'https://api.github.com/users/{user}';
'https://api.github.com/users/{user}/repos?page={pagina}&per_page={cantidad_repos}';

// Requerimiento 1
const request = async function (url) {
  const result = await fetch(url);
  const resultJSON = await result.json();
  return resultJSON;
};

const getUser = async function (user) {
  const url = `https://api.github.com/users/${user}`;
  const dataUser = await request(url);
  return dataUser;
};

console.log(getUser('AlfredoGuacaran'));

const getRepos = async function (user, pagina, cantidadRepos) {
  const url = `https://api.github.com/users/${user}/repos?page=${pagina}&per_page=${cantidadRepos}`;
  const reposData = await request(url);
  return reposData;
};
