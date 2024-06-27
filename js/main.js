import { paginationRockets, setupPagination } from "./components/pagination.js";

document.addEventListener("DOMContentLoaded", async () => {
    document.querySelector("#paginacion").innerHTML = await paginationRockets();
        
    setupPagination();
});