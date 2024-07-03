import { infoShips, moreInfoShips, nameShips } from "../modules/gallery.js";
import {getShipsNameById, getShipsMoreInfoById,idShips} from "../modules/info.js"


export const paginationShips= async () => {
    const rockets = await idShips();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const initShips = async() => {

    const shipsName = await getShipsNameById("5ea6ed2e080df4000697c90a")
    const shipsMoreInfo = await getShipsMoreInfoById("5ea6ed2e080df4000697c90a");
    console.log(shipsMoreInfo);
    
    await nameShips(shipsName);
    await infoShips(shipsMoreInfo);
    await moreInfoShips(shipsMoreInfo)
    


}

export const setupPaginationShips= async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const shipsName = await getShipsNameById(id)
    const shipsMoreInfo = await getShipsMoreInfoById(id);
    console.log(shipsMoreInfo);
    
    await nameShips(shipsName);
    await infoShips(shipsMoreInfo);
    await moreInfoShips(shipsMoreInfo)

    });
}