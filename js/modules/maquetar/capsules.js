import { getCapsules } from "../app.js";


export const Cpasules_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getCapsules();
    let number = 1;

    let cont = capsules.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuCapsule(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Capsule = async(i) =>{
    let capsules = await getCapsules();
    let capsule = capsules[i];
    console.log(capsule);

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let reuse_count = capsule.reuse_count;
    let water_landings = capsule.water_landings;
    let land_landings = capsule.land_landings;
    let last_update = capsule.last_update;
    let launches = capsule.launches;
    if (Array.isArray(launches) && launches.length > 1) {
        launches = launches.map((launch, index) => `${index + 1}. ${launch}`).join('<br>');
    }
    let serial = capsule.serial;
    let status = capsule.status;
    let type = capsule.type;
    let id = capsule.id;




    let zonaIzquierda = `
    <div class="iG1Element">
                    <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">reuse_count</p>
                            <p class="iG1Text">${reuse_count}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/img/verificado.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">land_landings</p>
                        <p class="iG1Text">${land_landings}</p>

                    </div>
                </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">water_landings</p>
                            <p class="iG1Text">${water_landings}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">last_update</p>
                            <p class="iG1Text">${last_update}</p>
                        </div>
                    </div>
                                        <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">serial</p>
                            <p class="iG1Text">${serial}</p>
                        </div>
                    </div>
                                        <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">status</p>
                            <p class="iG1Text">${status}</p>
                        </div>
                    </div>
`;

infoGalery1.innerHTML = zonaIzquierda;
let plantilla2 = `
<div id="centerTitle" class="mGS2Section">
            <h1 id="mainTitle">${type} : ${id}</h1>
        </div>
        

                <div class="mGS2SGGSDiv">
                <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                <div class="imagesGalery">
                <img class="rocketImg" src="storage/img/capsula.avif" referrerpolicy="no-referrer"> 
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
