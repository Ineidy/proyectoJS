import { footer, footerShips , changeFooter, changeFooterShips } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";
import { Rockets_menu, Rocket } from "./modules/maquetar/rockets.js";
import { getRockets } from "./modules/app.js";
import { Ships_menu, Ship } from "./modules/maquetar/ships.js";

await footer();
await Rocket(0);
await Rockets_menu();
await footerShips();
await Ship(0);
await Ships_menu();
await menu();

const setFooter = async(element) => {
    let padre = element;
    let hijo = padre.children[1];
    let id = hijo.id;

    await changeFooter(id);
};
document.setFooter = setFooter;
const setFooterShips = async(element) =>{
    let padre = element;
    let hijo = padre.children[1];
    let id = hijo.id;
    await changeFooterShips(id)
};
document.setFooterShips = setFooterShips

const setMenu = async(element) =>{
    let id = element.id;
    await Ship(id -1);
    await Ships_menu();
    await Rocket(id - 1);
    await Rockets_menu();
    await changeMenu(id);
};
document.setMenu = setMenu;