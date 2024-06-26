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
    <div id="description__item" class="description__item">
        <div class="load">${info.country}</div>
        <div class="load">${info.description}</div>
        <div class="load">The estimated cost per rocket launch ${info.cost_per_launch}</div>
        <div class="load">The date of the first flight of the rocket ${info.first_flight}</div>
        <div class="load">Read more about the rocket ${info.wikipedia}</div>
    </div>
    `   
    return plantilla
}