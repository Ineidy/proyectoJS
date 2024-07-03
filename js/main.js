import { footer , changeFooter } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";
import { Rockets_menu, Rocket } from "./modules/maquetar/rockets.js";
import { Ship, Ships_menu } from "./modules/maquetar/ships.js"; 
import { Roadster} from "./modules/maquetar/roadster.js";
import { Crew_menu, Crews } from "./modules/maquetar/crew.js";
import { History_menu, historia } from "./modules/maquetar/history.js";
import { Capsule, Cpasules_menu } from "./modules/maquetar/capsules.js";
import { compani, Company_menu } from "./modules/maquetar/company.js";
import { Cores,Cores_menu } from "./modules/maquetar/cores.js";
import { Dragons, Dragons_menu } from "./modules/maquetar/dragons.js";
import { landpads, lanspads_menu } from "./modules/maquetar/landpads.js";
import { launchpads, launchpads_menu } from "./modules/maquetar/launchpads.js";
import { starlink, Starlink_menu } from "./modules/maquetar/starlink.js";
import { pailoads_menu, payloads } from "./modules/maquetar/payloads.js";
import { launches, launches_menu } from "./modules/maquetar/launches.js";


await footer();
await Rocket(0);
await Rockets_menu();

await menu();
const setFooter = async(element) => {
    let padre = element;
    let hijo = padre.children[1];
    let id = hijo.id;

    await changeFooter(id);
};








const setMenuRockets = async(element) =>{
    let id = element.id;
    await Rocket(id - 1);
    await Rockets_menu();
    await changeMenu(id);
};
document.setMenuRockets = setMenuRockets;

const setMenuShips = async(element) =>{
    let id = element.id;
    await Ship(id - 1);
    await Ships_menu();
    await changeMenu(id)
};
document.setMenuShips = setMenuShips

const setMenuCrew = async(element) => {
    let id = element.id;
    await Crews(id - 1);
    await Crew_menu();
    await changeMenu(id);
}
document.setMenuCrew = setMenuCrew

const setMenuHist = async(element) =>{
    let id = element.id;
    await historia(id - 1);
    await History_menu();
    await changeMenu(id)
};
document.setMenuHist = setMenuHist


const setMenuCapsule = async(element) =>{
    let id = element.id;

    await Capsule(id - 1);
    await Cpasules_menu();
    await changeMenu(id);
};
document.setMenuCapsule = setMenuCapsule;

const setMenuCompany = async(element) =>{
    let id = element.id;

    await compani(id - 1);
    await Company_menu();
    await changeMenu(id);
};
document.setMenuCompany = setMenuCompany;

const setMenuCores = async(element) =>{
    let id = element.id;

    await Cores(id - 1);
    await Cores_menu();
    await changeMenu(id);
};
document.setMenuCores = setMenuCores;
const setMenuDragons = async(element) =>{
    let id = element.id;

    await Dragons(id - 1);
    await Dragons_menu();
    await changeMenu(id);
};
document.setMenuDragons = setMenuDragons;
const setMenuLanspads = async(element) =>{
    let id = element.id;

    await landpads(id - 1);
    await lanspads_menu();
    await changeMenu(id);
};
document.setMenuLanspads = setMenuLanspads;
const setMenuLaunchpadsn = async(element) =>{
    let id = element.id;

    await launchpads(id - 1);
    await launchpads_menu();
    await changeMenu(id);
};
document.setMenuLaunchpadsn = setMenuLaunchpadsn;
const setMenuStarlink = async(element) =>{
    let id = element.id;

    await starlink(id - 1);
    await Starlink_menu();
    await changeMenu(id);
};
document.setMenuStarlink = setMenuStarlink;

const setMenuPay = async(element) =>{
    let id = element.id;

    await payloads(id - 1);
    await pailoads_menu();
    await changeMenu(id);
};
document.setMenuPay = setMenuPay;

const setMenuLaunches = async(element) =>{
    let id = element.id;

    await launches(id - 1);
    await launches_menu();
    await changeMenu(id);
};
document.setMenuLaunches = setMenuLaunches;














const openRockets = async(element) => {
        await setFooter(element);
        await Rocket(0);
        await Rockets_menu();
        await menu();
}
document.openRockets = openRockets;

const openShips = async(element) => {

    await setFooter(element);
    await Ship(0);
    await Ships_menu();
};
document.openShips = openShips;

const openRoadster = async(element) => {
    await setFooter(element);
    await Roadster(0);
}
document.openRoadster= openRoadster;

const openCrew = async(element) => {
    await setFooter(element);
    await Crews(0);
    await Crew_menu();
    await menu();
}
document.openCrew= openCrew;

const openHistory = async(element) => {

    await setFooter(element);
    await historia(0);
    await History_menu();
    await menu();
};
document.openHistory = openHistory;
const openCapsulas = async(element)=>{

    await setFooter(element);
    await Capsule(0)
    await Cpasules_menu();
    await menu();

};
document.openCapsulas = openCapsulas;

const openCompany = async(element)=>{

    await setFooter(element);
    await compani(0)
    await Company_menu();
    await menu();

};
document.openCompany = openCompany;
const openCores = async(element)=>{

    await setFooter(element);
    await Cores(0)
    await Cores_menu();
    await menu();

};
document.openCores = openCores;

const openDragons = async(element)=>{

    await setFooter(element);
    await Dragons(0)
    await Dragons_menu();
    await menu();

};
document.openDragons = openDragons;

const openLands = async(element)=>{

    await setFooter(element);
    await landpads(0)
    await lanspads_menu();
    await menu();

};
document.openLands = openLands;

const openLaunhc= async(element)=>{

    await setFooter(element);
    await launchpads(0)
    await launchpads_menu();
    await menu();

};
document.openLaunhc = openLaunhc;

const openStar= async(element)=>{

    await setFooter(element);
    await starlink(0)
    await Starlink_menu();
    await menu();

};
document.openStar = openStar;

const openPay= async(element)=>{

    await setFooter(element);
    await payloads(0)
    await pailoads_menu();
    await menu();

};
document.openPay = openPay;

const openLaunches= async(element)=>{

    await setFooter(element);
    await launches(0)
    await launches_menu();
    await menu();

};
document.openLaunches = openLaunches;
