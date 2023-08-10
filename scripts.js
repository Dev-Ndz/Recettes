const reponse = await fetch('recettes.json');
const recettes = await reponse.json();

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

for (let i = 0; i<recettes.length; i++){
    
    let categorie = [] ;
    let existeDeja = false;

    for (let j = 0; j < categorie.length;j++){
        if (categorie.length <= 0){
            break;
        }else{        
            console.log(categorie.length);
            console.log(`recettes[${i}].categorie = ${recettes[i].categorie} / categorie[${j}] = ${categorie[j]}`);
            // if (recettes[i].categorie == categorie[j]){
            //     existeDeja = true;
            // }
        }

    }
    if (existeDeja==false){
        categorie[i] = recettes[i].categorie
        console.log(categorie.length);
        console.log(categorie[i]);
    }
}

const btnTriCroissant = document.getElementById("btn-triCroissant");
btnTriCroissant.addEventListener("click", function () {
    recettes.sort(function(a,b){
        return a.duree - b.duree;
    });
    console.log(recettes);
});

const btnFiltreHealthy = document.getElementById("btn-filtreHealthy")
btnFiltreHealthy.addEventListener("click", function(){
    const recettesHealthy = recettes.filter(function(recette){
        return recette.categorie =="healthy";
    });
    console.log(recettesHealthy);
});