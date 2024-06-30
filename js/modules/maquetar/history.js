import { getHistory } from "../app.js";

export const History_menu = async() => {
    let container = document.querySelector(".navegationNumbersGrid");
    container.innerHTML = "";
    let History = await getHistory();
    let number = 1;
    let cont = History.length

    for (let i = 0; i < cont; i++) {
        let plantilla = `
        <div onclick="setMenuHistory(this)" id="${number}" class="navigationNumber">
        ${number}</div>`;
        number ++;
        container.innerHTML += plantilla;
    }
};

export const historia = async(i) => {
    let hiss = await getHistory();
    let hist = hiss[i];
    let infoGalery1 = document.querySelector(".infoGalery1");
    infoGalery1.innerHTML ="";
    let mGS2 = document.querySelector("#mGS2");
    mGS2.innerHTML = "";
    let mGS3 = document.querySelector("#mGS3");
    mGS3.innerHTML = "";

    let links = hist.links.article;
    let title = hist.title;
    let event_date_utc = hist.event_date_utc;
    let event_date_unix  =hist.event_date_unix;
    let details = hist.details
    let id = hist.id

    let plantilla1 = `
    <div class="iG1Element">
    <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">event_date_utc:</p>
            <p class="iG1Text">${event_date_utc}</p>
        </div>
    </div>
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">Article:</p>
        <a href="${links}" target="_blank" class="iG1Text">article</a>
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
            <p class="iG1Title">event_date_unix:</p>
            <p class="iG1Text">${event_date_unix}</p>
        </div>
    </div>
            <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/img/verificado.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">details:</p>
            <p class="iG1Text">${details}</p>
        </div>
    </div>

    `
    infoGalery1.innerHTML = plantilla1
    let plantilla2 = `
    <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${title}</h1>
            </div>
            

                    <div class="mGS2SGGSDiv">
                    <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                    <img class="rocketImg" src="storage/img/history.jpeg" referrerpolicy="no-referrer"> 
                    </div>
                </div>

                    
                </div>
    `
    mGS2.innerHTML = plantilla2
    let plantilla3 = `
    <div class="mGS3Section"></div>
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