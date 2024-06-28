import { getShips } from "../app"; 

export const Ships_menu = async() => {
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let number = 1;
    let cont = 0;
    for (let i = 0; i < cont.length; i++) {
        let plantilla = `
        <div onclick="setMenu(this)" id="${number}" class="navigationNumber">
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
    };
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
                            <p class="iG1Title">Roles</p>
                            <p class="iG1Text">${roles}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/img/verificado.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">Read more about the Ship</p>
                        <a href="${link}" target="_blank" class="iG1Text">Wikipedia</a>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">Launches</p>
                            <p class="iG1Text">${launches}}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">Id</p>
                            <p class="iG1Text">${id}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">Home_Port</p>
                            <p class="iG1Text">${homePort}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/img/verificado.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">Legacy_Id</p>
                        <p class="iG1Text">${legacyId}</p>
                    </div>
                </div>
                </div>
`;

    infoGalery1.innerHTML = zonaIzquierda;
}
