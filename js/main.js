import { paginationRockets, setupPagination, initRockets } from "./rockets/components/pagination.js";
import { paginationCapsules, setupPaginationCapsules, initCapsules } from "./capsules/components/pagination.js";
import { initCores, paginationCores, setupPaginationCores } from "./cores/components/pagination.js";
import { initCrew, paginationCrew, setupPaginationCrew } from "./crew/components/pagination.js";
import { initDragon, paginationDragon, setupPaginationDragon } from "./dragons/components/pagination.js";
import { initHistory, paginationHistory, setupPaginationHistory } from "./history/components/pagination.js";
import { initLandpad, paginationLandpad, setupPaginationLandpad } from "./landpads/components/pagination.js";
import { initLaunch, paginationLaunch, setupPaginationLaunch } from "./launches/components/pagination.js";
import { initLaunchpad, paginationLaunchpad, setupPaginationLaunchpad } from "./launchpads/components/pagination.js";
import { initPayload, paginationPayload, setupPaginationPayload } from "./payloads/components/pagination.js";
import { initShips, paginationShips, setupPaginationShips } from "./ships/components/pagination.js";



const rocketElement = document.querySelector(".rocket");
const capsuleElement = document.querySelector(".capsules")
const coreElement = document.querySelector(".cores")
const crewElement = document.querySelector(".crew")
const dragonElement = document.querySelector(".dragons")
const historyElement = document.querySelector(".history")
const landpadElement = document.querySelector(".landpads")
const launchElement = document.querySelector(".launches")
const launchpadElement = document.querySelector(".launchpads")
const payloadElement = document.querySelector(".payloads")
const shipsElement = document.querySelector(".ships")




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

const handleDragonClick = async (e) => {
    await clearInformation();
    await initDragon()
    document.querySelector("#paginacion").innerHTML = await paginationDragon();
    await setupPaginationDragon();
}

const handleHistoryClick = async (e) => {
    await clearInformation();
    await initHistory()
    document.querySelector("#paginacion").innerHTML = await paginationHistory();
    await setupPaginationHistory();
}

const handleLandpadClick = async (e) => {
    await clearInformation();
    await initLandpad()
    document.querySelector("#paginacion").innerHTML = await paginationLandpad();
    await setupPaginationLandpad();
}

const handleLaunchClick = async (e) => {
    await clearInformation();
    await initLaunch()
    document.querySelector("#paginacion").innerHTML = await paginationLaunch();
    await setupPaginationLaunch();
}

const handleLaunchpadClick = async (e) => {
    await clearInformation();
    await initLaunchpad()
    document.querySelector("#paginacion").innerHTML = await paginationLaunchpad();
    await setupPaginationLaunchpad();
}

const handlePayloadClick = async (e) => {
    await clearInformation();
    await initPayload()
    document.querySelector("#paginacion").innerHTML = await paginationPayload();
    await setupPaginationPayload();
}

const handleShipsClick = async (e) => {
    await clearInformation();
    await initShips()
    document.querySelector("#paginacion").innerHTML = await paginationShips();
    await setupPaginationShips();
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

    dragonElement.addEventListener("click", (e)=>{
        handleDragonClick()
    })

    historyElement.addEventListener("click", (e)=>{
        handleHistoryClick()
    })

    landpadElement.addEventListener("click", (e)=>{
        handleLandpadClick()
    })

    launchElement.addEventListener("click", (e)=>{
        handleLaunchClick()
    })

    launchpadElement.addEventListener("click", (e)=>{
        handleLaunchpadClick()
    })

    payloadElement.addEventListener("click", (e)=>{
        handlePayloadClick()
    })

    shipsElement.addEventListener("click", (e)=>{
        handleShipsClick()
    })
});
