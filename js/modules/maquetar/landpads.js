import { getLanspads } from "../app.js";


export const lanspads_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getLanspads();
    let number = 1;
    let cont = capsules.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuLanspads(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const landpads = async(i) =>{
    let capsules = await getLanspads();
    let lad = capsules[i];

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";


    let img = lad.images.large;
    let fotos = img
    ? `<img class="rocketImg" src="${img}" referrerpolicy="no-referrer">` 
    : "";
    let name = lad.name
    let full_name = lad.full_name;
    let status = lad.status;
    let type = lad.type;
    let locality = lad.locality;
    let region = lad.region;
    let latitude = lad.latitude;
    let longitude = lad.longitude;
    let landing_attempts = lad.landing_attempts;
    let landing_successes = lad.landing_successes;
    let wikipedia = lad.wikipedia;
    let details = lad.details;
    let launches = lad.launches;
    if (Array.isArray(launches) && launches.length > 1) {
        launches = launches.map((launch, index) => `${index + 1}. ${launch}`).join('<br>');
    }
    let id = lad.id;


    let zonaIzquierda = `
    <div class="iG1Element">
                    <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">wikipedia</p>
                            <a href="${wikipedia}" target="_blank" class="iG1Text">wikipedia</a>
                        </div>
                    </div>
                    <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/img/verificado.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">details</p>
                        <p class="iG1Text">${details}</p>

                    </div>
                </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">launches</p>
                            <p class="iG1Text">${launches}</p>
                        </div>
                    </div>
`;

infoGalery1.innerHTML = zonaIzquierda;


let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">LANDPADS =<br></h1>
                <h1 id="mainTitle"> = ${name}: ${id}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Aceleracion Admosferica</span>
                            <span class="circleInfo">${latitude} %</span>
                            <span class="circleInfo">${latitude} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${latitude} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">${longitude} %</span>
                            <span class="circleInfo">${longitude} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${longitude} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">INFORMATION </p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">full_name</p><p class="iFEText Right">${full_name}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">status</p><p class="iFEText Right">${status}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">locality</p><p class="iFEText Right">${locality}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">region</p><p class="iFEText Right">${region}</p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

                    <div class="mGS2SGGSDiv">
                    <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                    ${fotos}
                    </div>
                </div>

                    
                </div>
            </div>`;

    mGS2.innerHTML = plantilla2;
    let plantilla3 = `
    <div class="mGS3Section"></div>
    <div id="flexRight" class="mGS3Section">

        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">kgReturn_porcentaje:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${landing_attempts} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${landing_attempts}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">L.A</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">cubic_meters_return_porcen:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${landing_successes} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${landing_successes}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">L.S</p>
            </div>
        </div>
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