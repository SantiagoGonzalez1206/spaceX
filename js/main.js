import { paginationRockets, setupPagination } from "./components/pagination.js";
import { asd } from "./components/pagination.js";

asd();

document.addEventListener("DOMContentLoaded", async () => {
    document.querySelector("#paginacion").innerHTML = await paginationRockets();
        
    setupPagination();
});