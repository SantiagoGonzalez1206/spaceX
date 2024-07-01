import { paginationRockets, setupPagination, initRockets } from "./rockets/components/pagination.js";
import { paginationCapsules, setupPaginationCapsules, initCapsules } from "./capsules/components/pagination.js";


const rocketElement = document.querySelector(".rocket");
const capsuleElement = document.querySelector(".capsules")


export const clearInformation = () => {
    document.querySelector("#header__title").innerHTML = "";
    document.querySelector("#description__item").innerHTML = "";
    document.querySelector("#main__section").innerHTML = "";
    document.querySelector("#information__2").innerHTML = "";
}

const handleRocketClick = async (e) => {
    await clearInformation();
    await initRockets()
    document.querySelector("#paginacion").innerHTML = await paginationRockets();
    await setupPagination();
}

const handleCapsulesClick = async (e) => {
    await clearInformation();
    await initCapsules()
    document.querySelector("#paginacion").innerHTML = await paginationCapsules();
    await setupPaginationCapsules();
}

document.addEventListener("DOMContentLoaded", async (e) => {
    handleRocketClick()

    capsuleElement.addEventListener("click", (e)=>{
        initCapsules()
    });

});
