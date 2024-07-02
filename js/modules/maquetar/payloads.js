import { getPayloads } from "../app.js";


export const pailoads_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getPayloads();
    let number = 1;
    let cont = capsules.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuPay(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const payloads = async(i) =>{
    let capsules = await getPayloads();
    let core = capsules[i];

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";
    
    let name = core.name;
    let type = core.type;
    let reused = core.reused;
    let launch = core.launch;
    let customers = core.customers;
    let norad_ids = core.norad_ids;
    let nationalities = core.nationalities;
    let manufacturers = core.manufacturers;
    let orbit = core.orbit;
    let reference_system = core.reference_system;
    let regime = core.regime;
    let capsule = core.dragon.capsule;
    let mass_returned_kg = core.dragon.mass_returned_kg;
    let mass_returned_lbs = core.dragon.mass_returned_lbs;
    let flight_time_sec = core.dragon.flight_time_sec;
    let manifest = core.dragon.manifest;
    let water_landing = core.dragon.water_landing;
    let land_landing = core.dragon.land_landing;
    let id = core.id;
    let longitude = core.longitude;
    let longitudee = (longitude / 1000) * 100;
    if(longitude ===null){
        longitude = 0
    }
    let semi_major_axis_km = core.semi_major_axis_km;
    let semi_major_axis_kmm = (semi_major_axis_km / 1000) * 100;
    if(semi_major_axis_km ===null){
        semi_major_axis_km = 0
    }
    let eccentricity = core.eccentricity;
    let eccentricityy = (eccentricity/ 1000) * 100;
    if(eccentricity ===null){
        eccentricity = 0
    }
    let periapsis_km = core.periapsis_km;
    let periapsis_kmm = (periapsis_km / 1000) * 100;
    if(periapsis_km ===null){
        periapsis_km = 0
    }
    let apoapsis_km = core.apoapsis_km;
    let apoapsis_kmm = (apoapsis_km / 1000) * 100;
    if(apoapsis_km ===null){
        apoapsis_km = 0
    }
    let inclination_deg = core.inclination_deg;
    let inclination_degg = (inclination_deg / 1000) * 100;
    if(inclination_deg ===null){
        inclination_deg = 0
    }
    let period_min = core.period_min;
    let period_minn = (period_min / 1000) * 100;
    if(period_min ===null){
        period_min = 0
    }
    let lifespan_years = core.lifespan_years;
    let lifespan_yearss = (lifespan_years / 1000) * 100;
    if(lifespan_years ===null){
        lifespan_years = 0
    }
    let epoch = core.epoch;
    if(epoch ===null){
        epoch = 0
    }
    let mean_motion = core.mean_motion;
    let mean_motionn = (mean_motion / 1000) * 100;
    if(mean_motion ===null){
        mean_motion = 0
    }
    let raan = core.raan;
    let raann = (raan / 1000) * 100;
    if(raan ===null){
        raan = 0
    }
    let arg_of_pericenter = core.arg_of_pericenter;
    let arg_of_pericenterr = (arg_of_pericenter / 1000) * 100;
    if(arg_of_pericenter ===null){
        arg_of_pericenter = 0
    }
    let mean_anomaly = core.mean_anomaly;
    let mean_anomalyy = (mean_anomaly / 1000) * 100;
    if(mean_anomaly ===null){
        mean_anomaly = 0
    }

    let zonaIzquierda = `
    <div class="iG1Element">
                    <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">capsule</p>
                            <p class="iG1Text">${capsule}</p>

                        </div>
                    </div>
                    <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/img/verificado.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">mass_returned_kg</p>
                        <p class="iG1Text">${mass_returned_kg}</p>

                    </div>
                </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">mass_returned_lbs</p>
                            <p class="iG1Text">${mass_returned_lbs}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">flight_time_sec</p>
                            <p class="iG1Text">${flight_time_sec}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">manifest</p>
                            <p class="iG1Text">${manifest}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">water_landing</p>
                            <p class="iG1Text">${water_landing}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">land_landing</p>
                            <p class="iG1Text">${land_landing}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">launch</p>
                            <p class="iG1Text">${launch}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">longitude</p>
                            <p class="iG1Text">${longitude}</p>
                        </div>
                    </div>

                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">id</p>
                            <p class="iG1Text">${id}</p>
                        </div>
                    </div>
`;

infoGalery1.innerHTML = zonaIzquierda;


let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${name}: ${type}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">periapsis_km</span>
                            <span class="circleInfo">${periapsis_kmm} %</span>
                            <span class="circleInfo">${periapsis_km} PE</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${periapsis_kmm} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">apoapsis_km</span>
                            <span class="circleInfo">${apoapsis_kmm} %</span>
                            <span class="circleInfo">${apoapsis_km} AP</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${apoapsis_kmm} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">spaceTrack </p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">reused</p><p class="iFEText Right">${reused}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">customers</p><p class="iFEText Right">${customers}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">norad_ids</p><p class="iFEText Right">${norad_ids}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">nationalities</p><p class="iFEText Right">${nationalities}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">manufacturers</p><p class="iFEText Right">${manufacturers}</p>
                            </div>
                            </div>
                            </div>

                            <div class="mGS2SGGSDiv">
                            <div class="infoFlex">
                                <p class="infoFlexTitle">spaceTrack </p>
                                <div class="line"></div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">orbit</p><p class="iFEText Right">${orbit}</p>
                                </div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">regime</p><p class="iFEText Right">${regime}</p>
                                </div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">reference_system</p><p class="iFEText Right">${reference_system}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="mGS2SGGSDiv">
                    <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                    <img class="rocketImg" src="storage/img/payloads.webp" referrerpolicy="no-referrer"> 

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
                <p class="iG2ElementText">longitude:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${longitude} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${longitudee}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">LON</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">semi_major:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${semi_major_axis_km} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${semi_major_axis_kmm}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">S.M.A.K</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">eccentricityy:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${eccentricity} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${eccentricityy}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">ECC</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">inclination_degg:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${inclination_deg} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${inclination_degg}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">I.D</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">period_minn:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${period_min} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${period_minn}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">P.M</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">lifespan_years:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${lifespan_years} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${lifespan_yearss}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">L.Y</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">mean_motionn:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${mean_motion} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${mean_motionn}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">M.N</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">raan:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${raan} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${raann}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">RAAN</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">arg_of_pericenter:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${arg_of_pericenter} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${arg_of_pericenterr}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">A.O.P</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">mean_anomalyy:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${mean_anomaly} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${mean_anomalyy}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">M.A</p>
            </div>
        </div>
        

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
