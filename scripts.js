const reponse = await fetch('recettes.json');
const recettes = await reponse.json();

for (let i = 0; i<recettes.length; i++)
{

    const sectionMiniature = document.querySelector(".miniature")
    const miniatureRecette = document.createElement("div")

    const imageElement = document.createElement("img");
    imageElement.src = recettes[i].image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = recettes[i].nom;
    const dureeElement = document.createElement("p");
    dureeElement.innerText = `Durée : ${recettes[i].duree} minutes`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = recettes[i].categorie;

    sectionMiniature.appendChild(miniatureRecette);
    miniatureRecette.appendChild(imageElement);
    miniatureRecette.appendChild(nomElement);
    miniatureRecette.appendChild(dureeElement);
    miniatureRecette.appendChild(categorieElement);
}