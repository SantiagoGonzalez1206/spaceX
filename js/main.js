import { paginationRockets, setupPagination, asd } from "./rockets/components/pagination.js";
import { paginationCapsules, setupPaginationC, asda } from "./capsules/components/pagination.js";

asd();

document.addEventListener("DOMContentLoaded", async () => {

    document.querySelector("#paginacion").innerHTML = await paginationRockets();
    let capsules = document.querySelector("#capsules")
    capsules.addEventListener("click", (e)=>{
        asda()
        document.querySelector("#paginacion").innerHTML = paginationCapsules();

        setupPaginationC()
    });

    setupPagination()
});