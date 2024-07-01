import { getCores } from "../app.js";


export const Cores_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getCores();
    let number = 1;
    let cont = capsules.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuCores(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Cores = async(i) =>{
    let capsules = await getCores();
    let core = capsules[i];

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";


    let block =core.block;
    if(block === null){
        block = 0
    }

    let reuse_count =core.reuse_count;
    if( reuse_count === null){
        reuse_count = "undefined"
    }
    let rtls_attempts =core.rtls_attempts;
    if( rtls_attempts === null){
        rtls_attempts = "undefined"
    }
    let rtls_landings =core.rtls_landings;
    if( rtls_landings === null){
        rtls_landings = "undefined"
    }
    let asds_attempts =core.asds_attempts;
    if( asds_attempts === null){
        asds_attempts = "undefined"
    }
    let asds_landings =core.asds_landings;
    if( asds_landings === null){
        asds_landings = "undefined"
    }
    let last_update =core.last_update;
    if( last_update === null){
        last_update = "undefined"
    }
    let launches =core.launches;
    if (Array.isArray(launches) && launches.length > 1) {
        launches = launches.map((launch, index) => `${index + 1}. ${launch}`).join('<br>');
    }
    let serial =core.serial;
    let status =core.status;
    let id =core.id;





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
                        <p class="iG1Title">rtls_attempts</p>
                        <p class="iG1Text">${rtls_attempts}</p>

                    </div>
                </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">rtls_landings</p>
                            <p class="iG1Text">${rtls_landings}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">block</p>
                            <p class="iG1Text">${block}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">asds_attempts</p>
                            <p class="iG1Text">${asds_attempts}</p>
                        </div>
                    </div>

                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">asds_landings</p>
                            <p class="iG1Text">${asds_landings}</p>
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
                            <p class="iG1Title">status</p>
                            <p class="iG1Text">${status}</p>
                        </div>
                    </div>


`;

infoGalery1.innerHTML = zonaIzquierda;
let plantilla2 = `
<div id="centerTitle" class="mGS2Section">
            <h1 id="mainTitle">${serial} : ${id}</h1>
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