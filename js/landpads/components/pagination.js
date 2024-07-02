import { infoLandpad, lastInfoLandpad, moreInfoLandpad, nameLandpad } from "../modules/gallery.js";
import { getLandpadMoreInfoById, getLandpadNameById, idLandpad } from "../modules/info.js";




export const paginationLandpad = async () => {
    const rockets = await idLandpad();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

    export const initLandpad = async() => {

        const landpadName = await getLandpadNameById("5e9e3032383ecb90a834e7c8")
        const landpadMoreInfo = await getLandpadMoreInfoById("5e9e3032383ecb90a834e7c8");
        console.log(landpadMoreInfo);
        
        await nameLandpad(landpadName);
        await infoLandpad(landpadMoreInfo);
        await moreInfoLandpad(landpadMoreInfo);
        await lastInfoLandpad(landpadMoreInfo);
        


    }

export const setupPaginationLandpad = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const landpadName = await getLandpadNameById(id)
        const landpadMoreInfo = await getLandpadMoreInfoById(id);
        console.log(landpadMoreInfo);
        
        await nameLandpad(landpadName);
        await infoLandpad(landpadMoreInfo);
        await moreInfoLandpad(landpadMoreInfo);
        await lastInfoLandpad(landpadMoreInfo);
    });
}