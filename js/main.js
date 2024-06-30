import { footer , changeFooter } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";
import { Rockets_menu, Rocket } from "./modules/maquetar/rockets.js";
import { Ship, Ships_menu } from "./modules/maquetar/ships.js"; 
import { Roadster, roadster_menu } from "./modules/maquetar/roadster.js";
import { Crew_menu, Crews } from "./modules/maquetar/crew.js";


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
    await roadster_menu();
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