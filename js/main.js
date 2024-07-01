import { footer , changeFooter } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";
import { Rockets_menu, Rocket } from "./modules/maquetar/rockets.js";
import { Ship, Ships_menu } from "./modules/maquetar/ships.js"; 
import { Roadster, Roadster_menu } from "./modules/maquetar/roadster.js";
import { Crew_menu, Crews } from "./modules/maquetar/crew.js";
import { History_menu, historia } from "./modules/maquetar/history.js";
import { Capsule, Cpasules_menu } from "./modules/maquetar/capsules.js";
import { compani, Company_menu } from "./modules/maquetar/company.js";
import { Cores,Cores_menu } from "./modules/maquetar/cores.js";
import { Dragons, Dragons_menu } from "./modules/maquetar/dragons.js";


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

const setMenuRoasters = async(element) => {
    let id = element.id;
    await Roadster(id - 1);
    await Roadster_menu();
    await changeMenu(id)
};
document.setMenuRoasters = setMenuRoasters

const setMenuCrew = async(element) => {
    let id = element.id;
    await Crews(id - 1);
    await Crew_menu();
    await changeMenu(id);
}
document.setMenuCrew = setMenuCrew

const setMenuHistory = async(element) =>{
    let id = element.id;
    await historia(id - 1);
    await History_menu();
    await changeMenu(id)
};
document.setMenuHistory = setMenuHistory


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
    await roadster_menu();
}
document.openRoadster= openRoadster;

const openCrew = async(element) => {
    await setFooter(element);
    await Crews(0);
    await Crew_menu();
}
document.openCrew= openCrew;

const openHistory = async(element) => {

    await setFooter(element);
    await historia(0);
    await History_menu();
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

