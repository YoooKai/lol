// Importamos la clase Champion desde el archivo Champion.js
import Champion from './Champion.js';

// Array para los campeones
let champions = [];

// Seleccionamos el botón del DOM
const button = document.querySelector("button");

// Evento para el botón de cargar campeones
button.addEventListener("click", () => {
    // Ocultar el botón y otros elementos
    document.querySelector('#button').style.display = 'none';
    document.querySelector('#header').style.visibility = 'hidden';
    document.querySelector('.char').style.visibility = 'hidden';
    
    // Cargar campeones
    loadChampions();  
});

// Función para cargar los campeones
const loadChampions = async () => {
    try {
        const response = await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json");
        const data = await response.json();
        const championData = data.data;

        // Limpiar la lista de campeones
        champions = [];

        // Crear y agregar cada campeón al array
        for (let key in championData) {
            const champion = new Champion(championData[key]);
            pushChampion(champion);
        }

        // Mostrar lista de campeones en el DOM
        showChampionList();

    } catch (error) {
        console.error("Error cargando los campeones:", error);
    }
};

// Función para agregar campeones al array
function pushChampion(champion) {
    champions.push(champion);
}

// Mostrar los campeones en el DOM
const showChampionList = () => {
    const championList = document.getElementById("championList");  
    championList.innerHTML = ''; // Limpiar contenido anterior

    // Añadir cada campeón al contenedor de la lista
    champions.forEach(champion => {
        championList.innerHTML += `
            <div class="card" style="position: relative;">
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.image}">
                <br>
                <strong>${champion.name}</strong>
                <p class="title">${champion.title}</p><br>
                <div class="types">
                    Roles: ${champion.roles.join(', ')}
                </div>
                <div class="blurb">
                    ${champion.blurb} 
                </div>
            </div>
        `;
    });
};
