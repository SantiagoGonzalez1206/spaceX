import { getAllRockets } from "./components/rockets.js";
import { nameRockets } from "./modules/gallery.js";

let header__title = document.querySelector(".header__title")

addEventListener("DOMContentLoaded", async()=>{
    let info = await getAllRockets()
    info = info[0]
    console.log(info);

    header__title.innerHTML = await nameRockets(info)
})