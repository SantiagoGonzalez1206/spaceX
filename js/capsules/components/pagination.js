import { getCapsuleMoreInfoById, getCapsuleSerialById, idCapsule } from "../modules/info.js";
import { moreInfoCapsule, serialCapsule } from "../modules/gallery.js";

export const paginationCapsules = async () => {
    const capsules = await idCapsule();
    const html = capsules.map((capsule, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${capsule.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const initCapsules = async() => {

    const capsuleName = await getCapsuleSerialById("5e9e2c5bf35918ed873b2664")
    const capsuleMoreInfo = await getCapsuleMoreInfoById("5e9e2c5bf35918ed873b2664");
    
    await serialCapsule(capsuleName);
    await moreInfoCapsule(capsuleMoreInfo)


}

export const setupPaginationCapsules = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        const capsuleName = await getCapsuleSerialById(id)
        const capsuleMoreInfo = await getCapsuleMoreInfoById(id);
    
        console.log(capsuleMoreInfo);

        await serialCapsule(capsuleName);
        await moreInfoCapsule(capsuleMoreInfo)
    
        
    });
}