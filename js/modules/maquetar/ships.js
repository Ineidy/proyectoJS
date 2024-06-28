import { getShips } from "../app.js"; 

export const Ships_menu = async() => {
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let shipss = await getShips();
    let number = 1;
    let cont = shipss.length;
    for (let i = 0; i < cont.length; i++) {
        let plantilla = `
        <div onclick="setMenuShips(this)" id="${number}" class="navigationNumber">
        ${number}
    </div>`;
        number ++;
        container.innerHTML += plantilla;
        
    }
};
export const Ship = async(i) =>{
    let ships = await getShips();
    let ship = ships[i];
    let infoGalery1 = document.querySelector(".infoGalery1");
    infoGalery1.innerHTML ='';
    let mGS2 = document.querySelector("#mGS2");
    mGS2.innerHTML = '';
    let mGS3 = document.querySelector("#mGS3");
    mGS3.innerHTML = '';

    let link = ship.link;
    if (link === null){
        link === 0
    };
    let launches = ship.launches;
    if (launches === null){
        launches === 0
    }
    let homePort = ship.home_port;
    if (homePort === null){
        homePort === 0
    };
    let legacyId = ship.legacy_id;
    if (legacyId === null){
        legacyId === 0
    };
    let roles = ship.roles;
    if (roles === null){
        roles === 0
    };
    let id = ship.id;
    if (id === null){
        id === 0
    };

    let zonaIzquierda = `
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">Launches:</p>
            <p class="iG1Text">${launches}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
        <img class="iG1Img" src="storage/img/verificado.png">
    </div>
    <div class="iG1ElementTitle">
        <p class="iG1Title">Link:</p>
        <a href="${link}" target="_blank" class="iG1Text">link</a>
    </div>
</div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">HomePort:</p>
            <p class="iG1Text">${homePort}</p>
        </div>
    </div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">LegacyId:</p>
            <p class="iG1Text">${legacyId}</p>
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
`;

infoGalery1.innerHTML = zonaIzquierda;
let last_ais_update = ship.last_ais_update;
let classs = ship.class;
let type = ship.type;
let year_built = ship.year_built;
let abs = ship.abs;
let mmsi = ship.mmsi;
let imo = ship.imo;
let active= ship.active;
let latitude = ship.latitude;
let longitude = ship.longitude;

let namee = ship.name;
let mass_kgg = ship.mass_kg;
let mass_kg = ship.mass_kg / 1000 * 100;
let mass_lbss = ship.mass_lbs;
let mass_lbs = ship.mass_lbs / 1000 * 100;


let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Aceleracion Admosferica</span>
                            <span class="circleInfo">${mass_kg} %</span>
                            <span class="circleInfo">${mass_kgg} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${mass_kg} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">${mass_lbs} %</span>
                            <span class="circleInfo">${mass_lbss} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${mass_lbs} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle"INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${engines_type} ${engines_version}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Maximum power loss</p><p class="iFEText Right">${engine_loss_max}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Engine availability</p><p class="iFEText Right">${layout}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Number of engines</p><p class="iFEText Right">${enginesNumber}</p>
                            </div>
                            <div class="infoFlexElement">
                            <p class="iFEText Left">Number of engines</p><p class="iFEText Right">${enginesNumber}</p>
                        </div>
                            ${propellantsHtml}
                        </div>
                    </div>

                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">INFORMATION </p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Active</p><p class="iFEText Right">${active}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Stages</p><p class="iFEText Right">${stages}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Landing legs</p><p class="iFEText Right">${landing_legs}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Leg material</p><p class="iFEText Right">${material}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>

                    <div class="mGS2SGGSDiv">
                    <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                        ${htmlImages}
                    </div>
                </div>

                    
                </div>
            </div>`;

    mGS2.innerHTML = plantilla2;
}