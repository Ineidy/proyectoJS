import { getStarlink } from "../app.js";


export const Starlink_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getStarlink();
    let number = 1;
    let cont = 0;
    if (rockets.length > 10){
        cont = 10;
    }else{
        cont = rockets.length;
    }
    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuStarlink(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const starlink = async(i) =>{
    let capsules = await getStarlink();
    let core = capsules[i];

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let CCSDS_OMM_VERS = core.spaceTrack.CCSDS_OMM_VERS;
    let COMMENT = core.spaceTrack.COMMENT;
    let CREATION_DATE = core.spaceTrack.CREATION_DATE;
    let ORIGINATOR = core.spaceTrack.ORIGINATOR;
    let OBJECT_NAME = core.spaceTrack.OBJECT_NAME;
    let OBJECT_ID = core.spaceTrack.OBJECT_ID;
    let CENTER_NAME = core.spaceTrack.CENTER_NAME;
    let REF_FRAME = core.spaceTrack.REF_FRAME;
    let TIME_SYSTEM = core.spaceTrack.TIME_SYSTEM;
    let MEAN_ELEMENT_THEORY = core.spaceTrack.MEAN_ELEMENT_THEORY;
    let MEAN_MOTION = core.spaceTrack.MEAN_MOTION;
    let ECCENTRICITY = core.spaceTrack.ECCENTRICITY;
    let INCLINATION = core.spaceTrack.INCLINATION;
    let RA_OF_ASC_NODEE = core.spaceTrack.RA_OF_ASC_NODE;
    let RA_OF_ASC_NODE = (RA_OF_ASC_NODEE / 1000) * 100;
    let ARG_OF_PERICENTERR = core.spaceTrack.ARG_OF_PERICENTER;
    let ARG_OF_PERICENTER = (ARG_OF_PERICENTERR / 1000) * 100;
    let MEAN_ANOMALYY = core.spaceTrack.MEAN_ANOMALY;
    let MEAN_ANOMALY = (MEAN_ANOMALYY / 1000) * 100;
    let EPHEMERIS_TYPE = core.spaceTrack.EPHEMERIS_TYPE;
    let NORAD_CAT_ID = core.spaceTrack.NORAD_CAT_ID;
    let NORAD_CAT_IDD = (NORAD_CAT_ID / 100000) * 100;
    let ELEMENT_SET_NO = core.spaceTrack.ELEMENT_SET_NO;
    let ELEMENT_SET_NOO = (ELEMENT_SET_NO / 1000) * 100;
    let REV_AT_EPOCH = core.spaceTrack.REV_AT_EPOCH;
    let REV_AT_EPOCHH = (REV_AT_EPOCH / 10000) * 100;
    let BSTAR = core.spaceTrack.BSTAR;
    let MEAN_MOTION_DOT = core.spaceTrack.MEAN_MOTION_DOT;
    let MEAN_MOTION_DDOT = core.spaceTrack.MEAN_MOTION_DDOT;
    let SEMIMAJOR_AXIS = core.spaceTrack.SEMIMAJOR_AXIS;
    let SEMIMAJOR_AXISS = (SEMIMAJOR_AXIS / 10000) * 100;
    let PERIOD = core.spaceTrack.PERIOD;
    let APOAPSIS = core.spaceTrack.APOAPSIS
    let APOAPSISS = (APOAPSIS / 1000) * 100;
    let PERIAPSIS = core.spaceTrack.PERIAPSIS;
    let PERIAPSISS = (PERIAPSIS / 1000) * 100;
    let OBJECT_TYPE = core.spaceTrack.OBJECT_TYPE;
    let RCS_SIZE = core.spaceTrack.RCS_SIZE;
    let COUNTRY_CODE = core.spaceTrack.COUNTRY_CODE;
    let LAUNCH_DATE = core.spaceTrack.LAUNCH_DATE;
    let SITE = core.spaceTrack.SITE;
    let CLASSIFICATION_TYPE = core.spaceTrack.CLASSIFICATION_TYPE;
    let DECAY_DATE = core.spaceTrack.DECAY_DATE;
    let DECAYED = core.spaceTrack.DECAYED;
    let FILE = core.spaceTrack.FILE;
    let GP_ID = core.spaceTrack.GP_ID;
    let TLE_LINE0 = core.spaceTrack.TLE_LINE0;
    let TLE_LINE1 = core.spaceTrack.TLE_LINE1;
    let TLE_LINE2 = core.spaceTrack.TLE_LINE2;
    let launch = core.launch;
    if(launch ===null){
        launch = 0
    }
    let version = core.version;
    if(version ===null){
        version = 0
    }
    let height_km = core.height_km;
    if(height_km ===null){
        height_km = 0
    }
    let latitude = core.latitude;
    if(latitude ===null){
        latitude = 0
    }
    let longitude = core.longitude;
    if(longitude ===null){
        longitude = 0
    }
    let velocity_kms = core.velocity_kms;
    if(velocity_kms ===null){
        velocity_kms = 0
    }
    let id = core.id;
    if(id ===null){
        id = 0
    }


    let zonaIzquierda = `
    <div class="iG1Element">
                    <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">COUNTRY_CODE</p>
                            <p class="iG1Text">${COUNTRY_CODE}</p>

                        </div>
                    </div>
                    <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/img/verificado.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">LAUNCH_DATE</p>
                        <p class="iG1Text">${LAUNCH_DATE}</p>

                    </div>
                </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">SITE</p>
                            <p class="iG1Text">${SITE}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">CLASSIFICATION_TYPE</p>
                            <p class="iG1Text">${CLASSIFICATION_TYPE}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">DECAY_DATE</p>
                            <p class="iG1Text">${DECAY_DATE}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">DECAYED</p>
                            <p class="iG1Text">${DECAYED}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">FILE</p>
                            <p class="iG1Text">${FILE}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">GP_ID</p>
                            <p class="iG1Text">${GP_ID}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">TLE_LINE0</p>
                            <p class="iG1Text">${TLE_LINE0}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">TLE_LINE1</p>
                            <p class="iG1Text">${TLE_LINE1}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">TLE_LINE2</p>
                            <p class="iG1Text">${TLE_LINE2}</p>
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
                            <p class="iG1Title">version</p>
                            <p class="iG1Text">${version}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">height_km</p>
                            <p class="iG1Text">${height_km}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/img/verificado.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">latitude</p>
                            <p class="iG1Text">${latitude}</p>
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
                            <p class="iG1Title">velocity_kms</p>
                            <p class="iG1Text">${velocity_kms}</p>
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
                <h1 id="mainTitle">${OBJECT_NAME}: ${OBJECT_ID}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">BSTAR</span>
                            <span class="circleInfo">${BSTAR} %</span>
                            <span class="circleInfo">${BSTAR} BS</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${BSTAR} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">PERIOD</span>
                            <span class="circleInfo">${PERIOD} %</span>
                            <span class="circleInfo">${PERIOD} PE</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${PERIOD} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
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
                                <p class="iFEText Left">CCSDS_OMM_VERS</p><p class="iFEText Right">${CCSDS_OMM_VERS}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">CREATION_DATE</p><p class="iFEText Right">${CREATION_DATE}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">ORIGINATOR</p><p class="iFEText Right">${ORIGINATOR}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">CENTER_NAME</p><p class="iFEText Right">${CENTER_NAME}</p>
                            </div>
                            </div>
                            </div>

                            <div class="mGS2SGGSDiv">
                            <div class="infoFlex">
                                <p class="infoFlexTitle">spaceTrack </p>
                                <div class="line"></div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">REF_FRAME</p><p class="iFEText Right">${REF_FRAME}</p>
                                </div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">TIME_SYSTEM</p><p class="iFEText Right">${TIME_SYSTEM}</p>
                                </div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">MEAN_ELEMENT_THEORY</p><p class="iFEText Right">${MEAN_ELEMENT_THEORY}</p>
                                </div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">OBJECT_TYPE</p><p class="iFEText Right">${OBJECT_TYPE}</p>
                                </div>
                                <div class="infoFlexElement">
                                    <p class="iFEText Left">RCS_SIZE</p><p class="iFEText Right">${RCS_SIZE}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="mGS2SGGSDiv">
                    <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                    <img class="rocketImg" src="storage/img/starlink.jpg" referrerpolicy="no-referrer"> 

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
                <p class="iG2ElementText">MEAN_MOTION:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${MEAN_MOTION} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${MEAN_MOTION}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">M.M</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">ECCENTRICITY:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${ECCENTRICITY} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${ECCENTRICITY}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">ECC</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">INCLINATION:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${INCLINATION} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${INCLINATION}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">INC</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">RA_OF_ASC_NODEE:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${RA_OF_ASC_NODEE} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${RA_OF_ASC_NODE}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">R.O.A.N</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">ARG_OF_PERICENTER:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${ARG_OF_PERICENTERR} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${ARG_OF_PERICENTER}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">A.O.P</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">MEAN_ANOMALY:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${MEAN_ANOMALYY} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${MEAN_ANOMALY}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">M.A</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">NORAD_CAT_ID:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${NORAD_CAT_ID} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${NORAD_CAT_IDD}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">N.C.I</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">EPHEMERIS_TYPE:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${EPHEMERIS_TYPE} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${EPHEMERIS_TYPE}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">E.T</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">ELEMENT_SET_NO:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${ELEMENT_SET_NO} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${ELEMENT_SET_NOO}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">E.S.N</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">REV_AT_EPOCH:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${REV_AT_EPOCH} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${REV_AT_EPOCHH}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">R.A.E</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">SEMIMAJOR_AXIS:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${SEMIMAJOR_AXIS} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${SEMIMAJOR_AXISS}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">S.A</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">APOAPSIS:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${APOAPSIS} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${APOAPSISS}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">APO</p>
            </div>
        </div>
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">PERIAPSISS:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${PERIAPSIS} </p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${PERIAPSISS}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">PERI</p>
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