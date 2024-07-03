import { infoStarlink, nameStarlink } from "../modules/gallery.js";
import { getStarlinkMoreInfoById, getStarlinkNameById, idStarlink } from "../modules/info.js";


export const paginationStarlink= async () => {
    const rockets = await idStarlink();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const initStarlink = async() => {

    const starlinkName = await getStarlinkNameById("5eed7716096e590006985825")
    const starlinkMoreInfo = await getStarlinkMoreInfoById("5eed7716096e590006985825");
    console.log(starlinkMoreInfo);
    
    await nameStarlink(starlinkName);
    await infoStarlink(starlinkMoreInfo);
    


}

export const setupPaginationStarlink= async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const starlinkName = await getStarlinkNameById(id)
        const starlinkMoreInfo = await getStarlinkMoreInfoById(id);
        console.log(starlinkMoreInfo);
        
        await nameStarlink(starlinkName);
        await infoStarlink(starlinkMoreInfo);

    });
}