import { infoDragon, moreInfoDragon, nameDragon } from "../modules/gallery.js";
import { getDragonMoreInfoById, getDragonNameById, idDragon } from "../modules/info.js";


export const paginationDragon = async () => {
    const rockets = await idDragon();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

    export const initDragon = async() => {

        const dragonName = await getDragonNameById("5e9d058759b1ff74a7ad5f8f")
        const dragonMoreInfo = await getDragonMoreInfoById("5e9d058759b1ff74a7ad5f8f");
        console.log(dragonMoreInfo);
        
        await nameDragon(dragonName);
        await infoDragon(dragonMoreInfo);
        await moreInfoDragon(dragonMoreInfo)
        // await lastInfoDragon(dragonMoreInfo)

    }

export const setupPaginationDragon = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        // Rockets
        const dragonName = await getDragonNameById(id)
        const dragonMoreInfo = await getDragonMoreInfoById(id);
    
        console.log(dragonMoreInfo);

        await nameDragon(dragonName);
        await infoDragon(dragonMoreInfo);
        await moreInfoDragon(dragonMoreInfo)
        // await lastInfoRocket(dragonMoreInfo)
    });
}
