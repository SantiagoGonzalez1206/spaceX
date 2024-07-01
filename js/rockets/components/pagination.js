import { getRocketMoreInfoById, getRocketNameById, idRocket} from "../modules/info.js";
import { nameRocket, infoRocket, moreInfoRocket, lastInfoRocket} from "../modules/gallery.js";


export const paginationRockets = async () => {
    const rockets = await idRocket();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

    export const initRockets = async() => {

        const rocketName = await getRocketNameById("5e9d0d95eda69955f709d1eb")
        const rocketMoreInfo = await getRocketMoreInfoById("5e9d0d95eda69955f709d1eb");
        console.log(rocketMoreInfo);
        
        await nameRocket(rocketName);
        await infoRocket(rocketMoreInfo);
        await moreInfoRocket(rocketMoreInfo)
        await lastInfoRocket(rocketMoreInfo)

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
        await infoRocket(rocketMoreInfo);
        await moreInfoRocket(rocketMoreInfo)
        await lastInfoRocket(rocketMoreInfo)
    });
}
