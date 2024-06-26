import { getAllRockets } from "./components/rockets.js";
import { nameRockets, infoRockets } from "./modules/gallery.js";

let header__title = document.querySelector(".header__title")
let description__item = document.querySelector(".description__item")

addEventListener("DOMContentLoaded", async()=>{
    let info = await getAllRockets()
    info = info[0]
    console.log(info);

    header__title.innerHTML = await nameRockets(info)

    description__item.innerHTML = await infoRockets(info)
})