const btn = document.querySelector("button");

btn.addEventListener("click", async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
    method: "GET",
  });

  const dataName = await response.json();

  document.getElementById(
    "name"
  ).innerHTML = `${dataName.id}: ${dataName.name}`;
  // console.log(dataName.sprites.front_default);
  document.querySelector("img").src = dataName.sprites.front_default;
  document.querySelector("figcaption").innerHTML =
    "Type:" + dataName.types[0].type.name;
  // console.log(dataName.types[0].type.name);
});
