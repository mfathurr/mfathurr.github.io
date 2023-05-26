// import pokeColor from "./pokeColor";

const btn = document.querySelector("button");

btn.addEventListener("click", async function fetchData() {
  const getPokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3", {
    method: "GET",
  });

  const response = await getPokemons.json();
  const results = response.results;
  const cards = document.querySelectorAll(".card");

  console.log(results);

  let hasil = "";
  // results.forEach((result) => {
  //   console.log(typeof (hasil += result.url));

  // });
  for (let i = 0; i < results.length; i++) {
    console.log(results[i].url);
  }

  // const getData = await fetch(hasil.url, { method: "GET" });
  // console.log(getData);

  // const hasil = response.results.forEach((result) => {
  //   console.log(result);
  // });
  // const pokemonData = await fetch(hasil.url, {
  //   method: "GET",
  // });
  // console.log(pokemonData);

  // for (let i = 0; i < cards.length; i++) {
  //   const card = cards[i];
  //   const result = results[i];

  //   const pokemonData = await fetch(result.url);
  //   const pokemon = await pokemonData.json();

  //   const name = card.querySelector(".name");
  //   name.innerText = `${pokemon.id}: ${pokemon.name}`;

  //   const img = card.querySelector("img");
  //   img.src = pokemon.sprites.front_default;
  //   img.alt = pokemon.name;

  //   const figcaption = card.querySelector("figcaption");
  //   figcaption.innerText = `Type: ${pokemon.types[0].type.name}`;
  // }
});
