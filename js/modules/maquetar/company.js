import { getCompany } from "../app.js";


export const Company_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let compani = await getCompany();
    let number = 1;
    let cont = compani.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuCompany(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const compani = async(i) =>{
    let compani = await getCompany();
    let compa = compani[i];
    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";


    if (compani.length > 0) {
    let address = compa.headquarters.address;
    let city = compa.headquarters.city;
    let state = compa.headquarters.state;
    let website = compa.links.website;
    let flickr = compa.links.flickr;
    let twitter = compa.links.twitter;
    let elon_twitter = compa.links.elon_twitter;
    let name = compa.name;
    let founder = compa.founder;
    let founded = compa.founded;
    let employees = compa.employees;
    let vehicles = compa.vehicles;
    let launch_sites = compa.launch_sites;

    let ceo = compa.ceo;
    let cto = compa.cto;
    let coo = compa.coo;
    let cto_propulsion = compa.cto_propulsion;
    let valuation = compa.valuation;
    let summary = compa.summary;
    let id = compa.id;

    let zonaIzquierda = `
    <div class="iG1Element">
                    <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">address</p>
                            <p class="iG1Text">${address}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/img/verificado.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">city</p>
                        <p class="iG1Text">${city}</p>

                    </div>
                </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">state</p>
                            <p class="iG1Text">${state}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">summary</p>
                            <p class="iG1Text">${summary}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">website</p>
                            <a href="${website}" target="_blank" class="iG1Text">website</a>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">flickr</p>
                            <a href="${flickr}" target="_blank" class="iG1Text">flickr</a>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">twitter</p>
                            <a href="${twitter}" target="_blank" class="iG1Text">twitter</a>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">elon_twitter</p>
                            <a href="${elon_twitter}" target="_blank" class="iG1Text">elon_twitter</a>
                        </div>
                    </div>
`;

infoGalery1.innerHTML = zonaIzquierda;

let plantilla2 = `
    <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${name} : ${id}</h1>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">founder</p><p class="iFEText Right">${founder}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">founded </p><p class="iFEText Right">${founded }</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">employees</p><p class="iFEText Right">${employees}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">vehicles</p><p class="iFEText Right">${vehicles}</p>
                            </div>
                            <div class="infoFlexElement">
                            <p class="iFEText Left">launch_sites</p><p class="iFEText Right">${launch_sites}</p>
                        </div>
                            
                        </div>
                    </div>

                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">INFORMATION </p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">valuation</p><p class="iFEText Right">${valuation}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">ceo</p><p class="iFEText Right">${ceo}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">cto</p><p class="iFEText Right">${cto}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">coo</p><p class="iFEText Right">${coo}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">cto_propulsion</p><p class="iFEText Right">${cto_propulsion}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                    <div class="mGS2SGGSDiv">
                    <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                        <img class="rocketImg" src="storage/img/spaceX.webp" referrerpolicy="no-referrer">
                    </div>
                </div>

                    
                </div>
    `
    mGS2.innerHTML = plantilla2
    }
}