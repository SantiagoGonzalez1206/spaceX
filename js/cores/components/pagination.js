import {getCoreMoreInfoById, idCores} from "../modules/info.js";
import { moreInfoCores } from "../modules/gallery.js";


export const paginationCores = async () => {
    const rockets = await idCores();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

    export const initCores = async() => {

        const coresMoreInfo = await getCoreMoreInfoById("5e9e289df35918033d3b2623");
        console.log(coresMoreInfo);
        

        await moreInfoCores(coresMoreInfo)
    }

export const setupPaginationCores = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const coresMoreInfo = await getCoreMoreInfoById(id);
        console.log(coresMoreInfo);
        

        await moreInfoCores(coresMoreInfo)
    });
}
