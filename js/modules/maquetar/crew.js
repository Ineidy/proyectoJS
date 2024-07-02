import { getCrew } from "../app.js";


export const Crew_menu = async() => {
    let container = document.querySelector(".navegationNumbersGrid");
    container.innerHTML = "";
    let crew = await getCrew();
    let number = 1;
    let cont = crew.length;

    for (let i = 0; i < cont; i++) {
        let plantilla = `
        <div onclick="setMenuCrew(this)" id="${number}" class="navigationNumber">
        ${number}
    </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Crews = async(i) => {
    let crewssss = await getCrew();
    let creew = crewssss[i];
    let infoGalery1 = document.querySelector(".infoGalery1");
    infoGalery1.innerHTML ='';
    let mGS2 = document.querySelector("#mGS2");
    mGS2.innerHTML = '';
    let mGS3 = document.querySelector("#mGS3");
    mGS3.innerHTML = '';


    let name = creew.name;
    let agency = creew.agency;
    let image = creew.image;
    let wikipedia = creew.wikipedia;
    let launches = creew.launches;
    let status = creew.status;
    let id = creew.id;
    let fotos = image ? `<img class="rocketImg" src="${image}" referrerpolicy="no-referrer">` : "";

     
    let plantilla1 = `
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">Agency:</p>
            <p class="iG1Text">${agency}</p>
        </div>
    </div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">wikipedia:</p>
        <a href="${wikipedia}" target="_blank" class="iG1Text">wikipedia</a>
        </div>
    </div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">LegacyId:</p>
            <p class="iG1Text">${id}</p>
        </div>
    </div>
        <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">Status:</p>
            <p class="iG1Text">${status}</p>
        </div>
    </div>
            <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">launches:</p>
            <p class="iG1Text">${launches}</p>
        </div>
    </div>

    `
    infoGalery1.innerHTML = plantilla1
    let plantilla2 = `
    <div id="centerTitle" class="mGS2Section">
    <h1 id="mainTitle">CREW =<br></h1>
                <h1 id="mainTitle">= ${name}</h1>
            </div>
            

                    <div class="mGS2SGGSDiv">
                    <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                    ${fotos}
                    </div>
                </div>

                    
                </div>
    `
    mGS2.innerHTML = plantilla2
    let plantilla3 = `
    <div class="mGS3Section"></div>
    <div id="flexRight" class="mGS3Section">
        <div id="navigationNumbersCenter" class="mGS3Section">
            <div class="navigationNumbersDiv">
                <div class="navigationNumbersGrid">
    
                </div>
            </div>
        </div>
        </div>
    `;

    mGS3.innerHTML = plantilla3;
}