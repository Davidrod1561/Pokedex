// Clase para representar un Pokémon
class Pokemon {
    constructor(name, type, weight, moves) {
      this.name = name;
      this.type = type;
      this.weight = weight;
      this.moves = moves;
    }
  }
  
  // Función para crear una tarjeta de Pokémon
  function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `Name: ${pokemon.name} | Type: ${pokemon.type}`;
    card.addEventListener('click', () => showPokemonDetails(pokemon));
    return card;
  }
  
  // Función para mostrar los detalles de un Pokémon en un modal
  function showPokemonDetails(pokemon) {
    const modal = document.getElementById('pokemonModal');
    const modalContent = document.getElementById('pokemonDetails');
    modalContent.innerHTML = `
      <h2>${pokemon.name}</h2>
      <p>Type: ${pokemon.type}</p>
      <p>Weight: ${pokemon.weight}</p>
      <p>Moves: ${pokemon.moves.join(', ')}</p>
    `;
    modal.style.display = 'block';
  
    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  // Función para filtrar los Pokémon por nombre
  function filterPokemonByName(pokemonList, name) {
    return pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
  }
  
  // Obtener los datos de los Pokémon desde el archivo JSON
  fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
    .then(response => response.json())
    .then(data => {
      const pokemonList = data.map(pokemonData => {
        const { name, type, weight, moves } = pokemonData;
        return new Pokemon(name, type, weight, moves);
      });
  
      const pokemonListContainer = document.getElementById('pokemonList');
      pokemonList.forEach(pokemon => {
        const card = createPokemonCard(pokemon);
        pokemonListContainer.appendChild(card);
      });
    });
  