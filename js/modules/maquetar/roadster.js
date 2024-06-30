import { getRoadster } from "../app.js";

export const roadster_menu = async() => {
    let container = document.querySelector(".navegationNumbersGris");
    container.innerHTML = "";
    let roadster = await getRoadster();
    let number = 1;
    let cont = roadster.length;
    for (let i = 0; i < cont; i++) {
        let plantilla = `
        <div onclick="setMenuRoasters(this)" id="${number}" class="navigationNumber">
        ${number}
    </div>`;
        number ++;
        container.innerHTML += plantilla;
    }
};
console.log("holiiiiiiiiiiiiiiiiis");
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
};

