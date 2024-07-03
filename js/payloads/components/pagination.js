import { infoPayload, moreInfoPayload, namePayload } from "../modules/gallery.js";
import { getPayloadMoreInfoById, getPayloadNameById, idPayload } from "../modules/info.js";


export const paginationPayload = async () => {
    const rockets = await idPayload();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const initPayload = async() => {

    const PayloadName = await getPayloadNameById("5eb0e4c6b6c3bb0006eeb21e")
    const PayloadMoreInfo = await getPayloadMoreInfoById("5eb0e4c6b6c3bb0006eeb21e");
    console.log(PayloadMoreInfo);
    
    await namePayload(PayloadName);
    await infoPayload(PayloadMoreInfo);
    await moreInfoPayload(PayloadMoreInfo)
    


}

export const setupPaginationPayload = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const PayloadName = await getPayloadNameById(id)
        const PayloadMoreInfo = await getPayloadMoreInfoById(id);
        console.log(PayloadMoreInfo);
        
        await namePayload(PayloadName);
        await infoPayload(PayloadMoreInfo);
        await moreInfoPayload(PayloadMoreInfo)

    });
}