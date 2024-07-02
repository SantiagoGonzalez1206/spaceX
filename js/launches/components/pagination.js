import { infoLaunch, moreInfoLaunch, nameLaunch } from "../modules/gallery.js";
import { getLaunchMoreInfoById, getLaunchNameById, idLaunch } from "../modules/info.js";


export const paginationLaunch = async () => {
    const rockets = await idLaunch();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const initLaunch = async() => {

    const launchName = await getLaunchNameById("5eb87d42ffd86e000604b384")
    const launchMoreInfo = await getLaunchMoreInfoById("5eb87d42ffd86e000604b384");
    console.log(launchMoreInfo);
    
    await nameLaunch(launchName);
    await infoLaunch(launchMoreInfo);
    await moreInfoLaunch(launchMoreInfo);
    // await lastInfoLaunch(launchMoreInfo);
    


}

export const setupPaginationLaunch = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const launchName = await getLaunchNameById(id)
        const launchMoreInfo = await getLaunchMoreInfoById(id);
        console.log(launchMoreInfo);
        
        await nameLaunch(launchName);
        await infoLaunch(launchMoreInfo);
        await moreInfoLaunch(launchMoreInfo);
        // await lastInfoLaunch(launchMoreInfo);
    });
}