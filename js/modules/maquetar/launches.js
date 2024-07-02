import { getLaunches } from "../app.js";


export const launches_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getLaunches();
    let number = 1;
    let cont = capsules.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuLaunches(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const launches = async(i) =>{
    let capsules = await getLaunches();
    let core = capsules[i];

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";


    let small = core.links.patch.small;
    let fotos = small
    ? `<img class="rocketImg" src="${small}" referrerpolicy="no-referrer">` 
    : "";
    let webcast = core.links.webcast;
    let youtube_id = core.links.youtube_id;
    let article = core.links.article;
    let wikipedia = core.links.wikipedia;
    let payloads = core.payloads;
    let launchpad = core.launchpad;
    let name = core.name;
    let date_utc = core.date_utc;
    let rocket = core.rocket;
    let window = core.window;
    let static_fire_date_utc = core.static_fire_date_utc;
    let static_fire_date_unix = core.static_fire_date_unix;
    let net = core.net;
    let success = core.success;
    let details = core.details;
    let launch_library_id = core.launch_library_id;
    let tbd = core.tbd;
    let auto_update = core.auto_update;
    let cores = core.cores.core;
    let upcoming = core.upcoming;
    let date_precision = core.date_precision;
    let id = core.id;


    let zonaIzquierda = `
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">youtube_id:</p>
            <p class="iG1Text">${youtube_id}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">launch_library_id:</p>
            <p class="iG1Text">${launch_library_id}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">tbd:</p>
            <p class="iG1Text">${tbd}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">auto_update:</p>
            <p class="iG1Text">${auto_update}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">cores:</p>
            <p class="iG1Text">${cores}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">date_precision:</p>
            <p class="iG1Text">${date_precision}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">upcoming:</p>
            <p class="iG1Text">${upcoming}</p>
        </div>
    </div>
    <div class="iG1Element">
    <div class="iG1ElementImg">
        <img class="iG1Img" src="storage/img/verificado.png">
    </div>
    <div class="iG1ElementTitle">
        <p class="iG1Title">webcast:</p>
        <a href="${webcast}" target="_blank" class="iG1Text">webcast</a>
    </div>
</div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">article:</p>
            <a href="${article}" target="_blank" class="iG1Text">article</a>
        </div>
    </div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">wikipedia:</p>
            <a href="${wikipedia}" target="_blank" class="iG1Text">wikipedia</a>
        </div>
    </div>
</div>
`;

infoGalery1.innerHTML = zonaIzquierda;
let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">LAUNCHES =<br></h1>
                <h1 id="mainTitle"> = ${name} : ${id}</h1>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">payloads</p><p class="iFEText Right">${payloads}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">launchpad</p><p class="iFEText Right">${launchpad}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">date_utc</p><p class="iFEText Right">${date_utc}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">rocket</p><p class="iFEText Right">${rocket}</p>
                            </div>
                            <div class="infoFlexElement">
                            <p class="iFEText Left">window</p><p class="iFEText Right">${window}</p>
                        </div>
                            
                        </div>
                    </div>

                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">INFORMATION </p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">static_utc</p><p class="iFEText Right">${static_fire_date_utc}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">static_unix</p><p class="iFEText Right">${static_fire_date_unix}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">net</p><p class="iFEText Right">${net}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">success</p><p class="iFEText Right">${success}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">details</p><p class="iFEText Right">${details}</p>
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