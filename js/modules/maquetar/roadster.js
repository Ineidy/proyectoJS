import { getRoadster } from "../app.js";

export const Roadster = async(i) => {
    let roadsterss = await getRoadster();
    let roadster = roadsterss[i];
    let infoGalery1 = document.querySelector(".infoGalery1");
    infoGalery1.innerHTML ='';
    let mGS2 = document.querySelector("#mGS2");
    mGS2.innerHTML = '';
    let mGS3 = document.querySelector("#mGS3");
    mGS3.innerHTML = '';


    let name = roadster.name;
    let launch_date_utc = roadster.launch_date_utc;
    let launch_date_unix = roadster.launch_date_unix;
    let launch_mass_kg = roadster.launch_mass_kg;
    let launch_mass_lbs = roadster.launch_mass_lbs;
    let norad_id = roadster.norad_id;
    let epoch_jd = roadster.epoch_jd;
    let orbit_type = roadster.orbit_type;
    let periapsis_au = roadster.periapsis_au;
    let periapsis_auu = ship.mass_kg / 1000 * 100;
    let semi_major_axis_au = roadster.semi_major_axis_au;
    let semi_major_axis_auu = ship.mass_kg / 1000 * 100;
    let eccentricity = roadster.eccentricity;
    let inclination = roadster.inclination;
    let inclinationn = roadster.mass_kg / 1000 * 100;
    // let longitude = roadster.longitude;
    let periapsis_arg = roadster.periapsis_arg;
    let period_days = roadster.period_days;
    let speed_kph = roadster.speed_kph;
    // let speed_mph = roadster.speed_mph;
    // let earth_distance_km = roadster.earth_distance_km;
    let apoapsis_au = roadster.apoapsis_au;
    let apoapsis_auu = roadster.mass_kg / 1000 * 100;
    // let earth_distance_mi = roadster.earth_distance_mi;
    // let mars_distance_km = roadster.mars_distance_km;
    // let mars_distance_mi = roadster.mars_distance_mi;
    // let flickr_images = roadster.flickr_images;
    let wikipedia = roadster.wikipedia;
    let video = roadster.video;
    let details = roadster.details;
    let id = roadster.id;
    let image = roadster.images;
    let fotos = image ? `<img class="rocketImg" src="${image}" referrerpolicy="no-referrer">` : "";

    let plantilla1 = `
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">Launches:</p>
            <p class="iG1Text">${details}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
        <img class="iG1Img" src="storage/img/verificado.png">
    </div>
    <div class="iG1ElementTitle">
        <p class="iG1Title">Link:</p>
        <a href="${video}" target="_blank" class="iG1Text">video</a>
    </div>
</div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">HomePort:</p>
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
            <p class="iG1Title">LegacyId:</p>
            <p class="iG1Text">${launch_date_utc}</p>
        </div>
    </div>

    `
    infoGalery1.innerHTML = plantilla1

    let plantilla2 = `
    <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${name}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Aceleracion Admosferica</span>
                            <span class="circleInfo">${apoapsis_auu} %</span>
                            <span class="circleInfo">${apoapsis_au} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${apoapsis_auu} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">${periapsis_auu} %</span>
                            <span class="circleInfo">${periapsis_au} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${periapsis_auu} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">${semi_major_axis_auu} %</span>
                            <span class="circleInfo">${semi_major_axis_au} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${semi_major_axis_auu} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">${inclinationn} %</span>
                            <span class="circleInfo">${inclination} kN</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${inclinationn} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
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
                                <p class="iFEText Left">launch_date_unix</p><p class="iFEText Right">${launch_date_unix}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">launch_mass_kg </p><p class="iFEText Right">${launch_mass_kg }</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">year_built</p><p class="iFEText Right">${launch_mass_lbs}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">norad_id</p><p class="iFEText Right">${norad_id}</p>
                            </div>
                            <div class="infoFlexElement">
                            <p class="iFEText Left">epoch_jd</p><p class="iFEText Right">${epoch_jd}</p>
                        </div>
                            
                        </div>
                    </div>

                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">INFORMATION </p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">orbit_type</p><p class="iFEText Right">${orbit_type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">periapsis_arg</p><p class="iFEText Right">${periapsis_arg}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">eccentricity</p><p class="iFEText Right">${eccentricity}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">period_days</p><p class="iFEText Right">${period_days}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">speed_kph</p><p class="iFEText Right">${speed_kph}</p>
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
    `
    mGS2.innerHTML = plantilla2
};

