import { paginationRockets, setupPagination, initRockets } from "./rockets/components/pagination.js";
import { paginationCapsules, setupPaginationCapsules, initCapsules } from "./capsules/components/pagination.js";
import { initCores, paginationCores, setupPaginationCores } from "./cores/components/pagination.js";
import { initCrew, paginationCrew, setupPaginationCrew } from "./crew/components/pagination.js";



const rocketElement = document.querySelector(".rocket");
const capsuleElement = document.querySelector(".capsules")
const coreElement = document.querySelector(".cores")
const crewElement = document.querySelector(".crew")


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

const handleCoreClick = async (e) => {
    await clearInformation();
    await initCores()
    document.querySelector("#paginacion").innerHTML = await paginationCores();
    await setupPaginationCores();
}


const handleCrewClick = async (e) => {
    await clearInformation();
    await initCrew()
    document.querySelector("#paginacion").innerHTML = await paginationCrew();
    await setupPaginationCrew();
}



document.addEventListener("DOMContentLoaded", async (e) => {

    rocketElement.addEventListener("click", (e)=>{
        handleRocketClick()
    })

    capsuleElement.addEventListener("click", (e)=>{
        handleCapsulesClick()
    });

    coreElement.addEventListener("click", (e)=>{
        handleCoreClick()
    });

    crewElement.addEventListener("click", (e)=>{
        handleCrewClick()
    })

});
