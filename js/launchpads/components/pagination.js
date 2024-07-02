import { infoLaunchpad, moreInfoLaunchpads, nameLaunchpad } from "../modules/gallery.js";
import { getLaunchpadMoreInfoById, getLaunchpadNameById, idLaunchpad } from "../modules/info.js";


export const paginationLaunchpad = async () => {
    const rockets = await idLaunchpad();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const initLaunchpad = async() => {

    const launchpadName = await getLaunchpadNameById("5e9e4502f509092b78566f87")
    const launchpadMoreInfo = await getLaunchpadMoreInfoById("5e9e4502f509092b78566f87");
    console.log(launchpadMoreInfo);
    
    await nameLaunchpad(launchpadName);
    await infoLaunchpad(launchpadMoreInfo);
    await moreInfoLaunchpads(launchpadMoreInfo);

    


}

export const setupPaginationLaunchpad = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const launchpadName = await getLaunchpadNameById(id)
        const launchpadMoreInfo = await getLaunchpadMoreInfoById(id);
        console.log(launchpadMoreInfo);
        
        await nameLaunchpad(launchpadName);
        await infoLaunchpad(launchpadMoreInfo);
        await moreInfoLaunchpads(launchpadMoreInfo);

    });
}