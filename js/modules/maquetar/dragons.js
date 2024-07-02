import { getDragons } from "../app.js";


export const Dragons_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getDragons();
    let number = 1;
    let cont = capsules.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuDragons(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Dragons = async(i) =>{
    let capsules = await getDragons();
    let core = capsules[i];

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let material = core.heat_shield.material;
    let size_meters = core.heat_shield.size_meters;
    let temp_degrees = core.heat_shield.temp_degrees;
    let dev_partner = core.heat_shield.dev_partner;
    let kg = core.launch_payload_mass.kg;
    let kg_porcen = (kg / 100) * 100;
    let lb = core.launch_payload_mass.lb;
    let cubic_meters = core.launch_payload_vol.cubic_meters;
    let cubic_meters_porcen = (cubic_meters / 100) * 100;
    let cubic_feet = core.launch_payload_vol.cubic_feet;
    let kgReturn = core.return_payload_mass.kg;
    let kgReturn_porcentaje = (kgReturn / 10000) * 100;
    let lbReturn = core.return_payload_mass.cubic_feet;
    let cubic_meters_return = core.return_payload_vol.cubic_meters;
    let cubic_meters_return_porcen = (cubic_meters_return / 100) * 100;
    let cubic_feet_return = core.return_payload_vol.cubic_feet;
    let payload_volume_cubic_meters = core.pressurized_capsule.payload_volume.cubic_meters;
    let payload_volume_cubic_meters_porcentaje = (payload_volume_cubic_meters / 100) * 100;
    let payload_volume_cubic_feet = core.pressurized_capsule.payload_volume.cubic_feet;
    let trunk_volume_cubic_meters = core.trunk.trunk_volume.cubic_meters;
    let trunk_volume_cubic_meters_porcentaje = (trunk_volume_cubic_meters / 100) * 100;
    let trunk_volume_cubic_feet = core.trunk.trunk_volume.cubic_meters;
    let cargo_solar_array = core.trunk.cargo.solar_array;
    let cargo_solar_array_porcentaje = (cargo_solar_array / 100) * 100;
    let cargo_unpressurized_cargo = core.trunk.cargo.unpressurized_cargo;
    let height_w_trunk_meters = core.height_w_trunk.meters;
    let height_w_trunk_meters_porcentaje = (height_w_trunk_meters / 100) * 100;
    let height_w_trunk_feet = core.height_w_trunk.feet;
    let diameter_meters = core.diameter.meters;
    let diameter_meters_porcentaje = (diameter_meters / 100) * 100;
    let diameter_feet = core.diameter.feet;
    let first_flight = core.first_flight;
    let name = core.name;
    let type = core.type;
    let active = core.active;
    let crew_capacity = core.crew_capacity;
    let sidewall_angle_deg = core.sidewall_angle_deg;
    let orbit_duration_yr = core.orbit_duration_yr;
    let dry_mass_kg = core.dry_mass_kg;
    let dry_mass_lb = core.dry_mass_lb;
    let wikipedia = core.wikipedia;
    let description = core.description;
    let id = core.id;

    let flickr_images = core.flickr_images;
    let flickr_imagesContador = flickr_images.length;
    let htmlImages = "";
    for (let i = 0; i < flickr_imagesContador; i++){
        let img = flickr_images[i];
        htmlImages += `
        <img class="rocketImg" src="${img}" referrerpolicy="no-referrer">`; 
    };


    let zonaIzquierda = `
    <div class="iG1Element">
                    <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">description</p>
                            <p class="iG1Text">${description}</p>
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
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">dry_mass_lb</p>
                            <p class="iG1Text">${dry_mass_lb}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">dry_mass_kg</p>
                            <p class="iG1Text">${dry_mass_kg}</p>
                        </div>
                    </div>
                                        <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">orbit_duration_yr</p>
                            <p class="iG1Text">${orbit_duration_yr}</p>
                        </div>
                    </div>
                                        <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">dry_mass_kg</p>
                            <p class="iG1Text">${dry_mass_kg}</p>
                        </div>
                    </div>
                     <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">orbit_duration_yr</p>
                            <p class="iG1Text">${orbit_duration_yr}</p>
                        </div>
                    </div>
                     <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">sidewall_angle_deg</p>
                            <p class="iG1Text">${sidewall_angle_deg}</p>
                        </div>
                    </div>
                     <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">active</p>
                            <p class="iG1Text">${active}</p>
                        </div>
                    </div>
                     <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">first_flight</p>
                            <p class="iG1Text">${first_flight}</p>
                        </div>
                    </div>
                     <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">crew_capacity</p>
                            <p class="iG1Text">${crew_capacity}</p>
                        </div>
                    </div>
                                         <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">wikipedia</p>
                            <a href="${wikipedia}" target="_blank" class="iG1Text">wikipedia</a>
                        </div>
                    </div>
`;

infoGalery1.innerHTML = zonaIzquierda;

let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">                <h1 id="mainTitle">DRAGONS =<br></h1>
                <h1 id="mainTitle">= ${name}: ${type}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Aceleracion Admosferica</span>
                            <span class="circleInfo">${kg_porcen} %</span>
                            <span class="circleInfo">${kg} kN</span>
                            <span class="circleInfo">${lb} Lbf</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${kg_porcen} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">${cubic_meters_porcen} %</span>
                            <span class="circleInfo">${cubic_meters} kN</span>
                            <span class="circleInfo">${cubic_feet} Lbf</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${cubic_meters_porcen} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">heat_shield </p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">material</p><p class="iFEText Right">${material}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">size_meters</p><p class="iFEText Right">${size_meters}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">temp_degrees</p><p class="iFEText Right">${temp_degrees}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">dev_partner</p><p class="iFEText Right">${dev_partner}</p>
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

    let plantilla3 = `
    <div class="mGS3Section"></div>
    <div id="flexRight" class="mGS3Section">

        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">kgReturn_porcentaje:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${kgReturn} kg</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${kgReturn_porcentaje}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${lbReturn} lb</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">cubic_meters_return_porcen:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${cubic_meters_return} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${cubic_meters_return_porcen}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${cubic_feet_return} F</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">payload_volume_cubic_meters:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${payload_volume_cubic_meters} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${payload_volume_cubic_meters_porcentaje}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${payload_volume_cubic_feet} F</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">trunk_volume_cubic_meters:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${trunk_volume_cubic_meters} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${trunk_volume_cubic_meters_porcentaje}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${trunk_volume_cubic_feet} F</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">cargo_solar_array:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${cargo_solar_array} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${cargo_solar_array_porcentaje}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${cargo_unpressurized_cargo} F</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">height_w_trunk_meters:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${height_w_trunk_meters} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${height_w_trunk_meters_porcentaje}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${height_w_trunk_feet} F</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">diameter_meters:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${diameter_meters} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${diameter_meters_porcentaje}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${diameter_feet} F</p>
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