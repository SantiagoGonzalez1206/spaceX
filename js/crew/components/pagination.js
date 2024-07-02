
import { moreInfoCrew, nameCrew } from "../modules/gallery.js";
import { getCrewMoreInfoById, getCrewNameById, idCrew } from "../modules/info.js";


export const paginationCrew = async () => {
    const rockets = await idCrew();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

    export const initCrew = async() => {

        const crewName = await getCrewNameById("5ebf1a6e23a9a60006e03a7a")
        const crewMoreInfo = await getCrewMoreInfoById("5ebf1a6e23a9a60006e03a7a");
        console.log(crewMoreInfo);
        
        await nameCrew(crewName);
        await moreInfoCrew(crewMoreInfo);
    }

export const setupPaginationCrew = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const crewName = await getCrewNameById(id)
        const crewMoreInfo = await getCrewMoreInfoById(id);
        console.log(crewMoreInfo);
        
        await nameCrew(crewName);
        await moreInfoCrew(crewMoreInfo);
    });
}