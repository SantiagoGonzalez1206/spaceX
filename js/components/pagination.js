import { getRocketMoreInfoById, getRocketNameById, idRocket } from "../modules/info.js";
import { nameRocket, moreInfoRocket } from "../modules/gallery.js";


export const paginationRockets = async () => {
    const rockets = await idRocket();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}


export const setupPagination = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        // Rockets
        const rocketName = await getRocketNameById(id)
        const rocketMoreInfo = await getRocketMoreInfoById(id);
        console.log(rocketMoreInfo);

        await nameRocket(rocketName);
        await moreInfoRocket(rocketMoreInfo);
        console.log(moreInfoRocket());
        
    });
}
