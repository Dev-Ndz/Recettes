const reponse = await fetch('recettes.json');
const recettes = await reponse.json();

/*******************************************
 * Initialisation des miniatures de recettes
 *******************************************/

for (let i = 0; i<recettes.length; i++)
{
    const sectionMiniature = document.querySelector(".miniature")
    const miniatureRecette = document.createElement("article")

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


/****************************
 * 
 * Initialisation des filtres
 * 
 ****************************/

// Filtres par catégorie
//**************************

// Création de la liste de catégorie

let categoriesImportees = recettes.map(recettes => recettes.categorie);
//utilisation de la fonction map pour extraire la liste des catégories
let categorie = [...new Set(categoriesImportees)];
//utilisation de Set()pour supprimer les catégories en double

// Création des boutons
console.log(categorie.length);
for(let i = 0 ; i < categorie.length ; i++)
{
    const sectionFiltres = document.querySelector(".filtres");
    console.log(sectionFiltres);
    const btnFiltre = document.createElement("button");
    btnFiltre.innerText = categorie[i];
    sectionFiltres.appendChild(btnFiltre);

    btnFiltre.addEventListener("click",function(){
        const recettesFiltrees = recettes.filter(function(recette){
            return recette.categorie == categorie[i];
        });
        console.log(recettesFiltrees);
    });
}



const btnTriCroissant = document.getElementById("btn-triCroissant");
btnTriCroissant.addEventListener("click", function () {
    recettes.sort(function(a,b){
        return a.duree - b.duree;
    });
    console.log(recettes);
});