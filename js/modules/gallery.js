export const nameRockets = (info)=>{
    let plantilla = ""

    plantilla+= /*html*/`
    <div id="header__title" class="header__title">
        <div class="load">${info.name}</div>
    </div>
    `
    return plantilla
    }

export const infoRockets = (info)=>{
    let plantilla = ""

    plantilla+= /*html*/`
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    `
}