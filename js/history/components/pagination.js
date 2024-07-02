import { moreInfoHistory } from "../modules/gallery.js";
import { getHistoryMoreInfoById, idHistory } from "../modules/info.js";

export const paginationHistory = async () => {
    const rockets = await idHistory();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

    export const initHistory = async() => {

        const historyMoreInfo = await getHistoryMoreInfoById();
        console.log(historyMoreInfo);
        

        await moreInfoHistory(historyMoreInfo)
    }

export const setupPaginationHistory = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const historyMoreInfo = await getHistoryMoreInfoById(id);
        console.log(historyMoreInfo);
        

        await moreInfoHistory(historyMoreInfo)
    });
}
