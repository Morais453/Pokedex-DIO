const PokemonList = document.getElementById("PokemonList") 
const loadB = document.getElementById('loadB')
const limit = 10
let offset = 0;

const maxRecord = 11


function PokemonItens (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {   
        const NovaL = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}"> 
                <span class="number">#${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt='${pokemon.name}'>
                </div>
            </li>
        `).join('')
        PokemonList.innerHTML += NovaL
    })    
}

PokemonItens(offset, limit)

loadB.addEventListener('click', () => {
    offset += limit
    
    PokemonItens(offset, limit)
})