const btnSearch = document.getElementById("btn-search");

const getGithub = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();

  if (!data) {
    alert("Nenhum usuário encontrado!");
    return;
  }

  return data;
};

const setPerfilCard = async (user) => {
  const userLogin = document.getElementById("user");
  const imgPerfil = document.getElementById("img-perfil");
  const followersSpan = document.getElementById("followers");
  const followingSpan = document.getElementById("following");
  const repositories = document.getElementById("repositories");
  const companySpan = document.getElementById("company");
  const locationSpan = document.getElementById("location");

  const {
    login,
    avatar_url,
    followers,
    following,
    public_repos,
    company,
    location,
  } = await getGithub(user);

  userLogin.textContent = login;
  imgPerfil.style.backgroundImage = `url(${avatar_url})`;
  followersSpan.textContent = `${followers} Seguidores`;
  followingSpan.textContent = `${following} Seguindo`;
  repositories.textContent = `${public_repos} Repositórios`;
  companySpan.textContent = company;
  locationSpan.textContent = location;
};

btnSearch.addEventListener("click", () => {
  const user = document.getElementById("user-input");

  if (user.value.length > 0) {
    setPerfilCard(user.value);
  }
});

const card = document.querySelector(".card");
const perfil = document.querySelector(".perfil");
const btnRandomBackground = document.querySelector("#btn-random-background");
const btnRandomBorder = document.querySelector("#btn-random-border");

const colorArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * colorArray.length);
    color += colorArray[random];
  }
  return color;
};

btnRandomBackground.addEventListener("click", () => {
  card.style.backgroundColor = `${randomColor()}`;
});

btnRandomBorder.addEventListener("click", () => {
  perfil.style.border = `1rem solid ${randomColor()}`;
});
