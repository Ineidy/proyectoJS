import { getShips } from "../app.js"; 

export const Ships_menu = async() => {
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let shipss = await getShips();
    let number = 1;
    let cont = shipss.length;
    for (let i = 0; i < cont; i++) {
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
        link = 0
    };
    let launches = ship.launches;
    if (launches === null){
        launches = 0
    } else if (Array.isArray(launches) && launches.length > 1) {
        launches = launches.map((launch, index) => `${index + 1}. ${launch}`).join('<br>');
    }

    let homePort = ship.home_port;
    if (homePort === null){
        homePort = 0
    };
    let legacyId = ship.legacy_id;
    if (legacyId === null){
        legacyId = 0
    };
    let roles = ship.roles;
    if (roles === null){
        roles = 0
    };
    let id = ship.id;
    if (id === null){
        id = 0
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
if (last_ais_update === null){
    last_ais_update = 0
}
let classs = ship.class;
if (classs === null){
    classs = 0
}
let type = ship.type;
if (type === null){
    type= 0
}
let year_built = ship.year_built;
if (year_built === null){
    year_built = 0
}
let abs = ship.abs;
if (abs === null){
    abs = 0
}
let mmsi = ship.mmsi;
if (mmsi === null){
    mmsi = 0
}
let imo = ship.imo;
if (imo === null){
    imo = 0
}
let active= ship.active;
if (active === null){
    active = 0
}
let latitude = ship.latitude;
if (latitude === null){
    latitude = 0
}
let longitude = ship.longitude;
if (longitude === null){
    longitude = 0;
}
let namee = ship.name;
let mass_kgg = ship.mass_kg;null
if (mass_kgg === null){
    mass_kgg = 0
}
let mass_kg = ship.mass_kg / 1000 * 100;
if (mass_kg === null){
    mass_kg = 0
}
let mass_lbss = ship.mass_lbs;
if (mass_lbss === null){
    mass_lbss = 0
}
let mass_lbs = ship.mass_lbs / 1000 * 100;
if (mass_lbs === null){
    mass_lbs = 0
}
let image = ship.image;
let fotos = image ? `<img class="rocketImg" src="${image}" referrerpolicy="no-referrer">` : "";
if (fotos === null){
    fotos = `<img class="rocketImg" src="storage/img/ships.png" referrerpolicy="no-referrer">`; 
}

let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">SHIPS =<br></h1>
                <h1 id="mainTitle"> = ${namee}</h1>
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
                            <p class="infoFlexTitle">INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">last-ais-update</p><p class="iFEText Right">${last_ais_update}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Class</p><p class="iFEText Right">${classs}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">year_built</p><p class="iFEText Right">${year_built}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">abs</p><p class="iFEText Right">${abs}</p>
                            </div>
                            <div class="infoFlexElement">
                            <p class="iFEText Left">mmsi</p><p class="iFEText Right">${mmsi}</p>
                        </div>
                            
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
                                <p class="iFEText Left">imo</p><p class="iFEText Right">${imo}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">latitude</p><p class="iFEText Right">${latitude}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">longitude</p><p class="iFEText Right">${longitude}</p>
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
`;

    mGS2.innerHTML = plantilla2;
    let plantilla3 = `

    <div id="navigationNumbersCenter" class="mGS3Section">
        <div class="navigationNumbersDiv">
            <div class="navigationNumbersGrid">

            </div>
        </div>
    </div>
    `;

    mGS3.innerHTML = plantilla3;

}