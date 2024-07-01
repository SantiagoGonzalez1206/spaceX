export const nameRocket = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const infoRocket = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
            <h3>Description</h3>
            <br>
            <p class="description__all">${moreInfo.description}</p>
            <br>
            <div class="info">
                <div class="info__item">
                    <img src="storage/imgs/icons/numero1.png">
                    <div class="info__item_text">  
                        <h4>Country</h4>
                        <p>${moreInfo.country}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero2.png">
                    <div class="info__item_text">  
                        <h4>First Flight</h4>
                        <p>${moreInfo.first_flight}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}



export const moreInfoRocket = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.height.meters}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Height:</b>${moreInfo.height.meters} Meters <div class="externo">${moreInfo.height.feet} feets </div></div></div></div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.diameter.meters}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Diameter:</b>${moreInfo.diameter.meters} Meters <div class="externo">${moreInfo.diameter.feet} feets </div></div></div></div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${(moreInfo.mass.kg)/20000}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Mass:</b>${moreInfo.mass.kg} Kg <div class="externo">${moreInfo.mass.lb} Lb </div></div></div></div></div>
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="info__table1">
                <h2>Engines</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Vacuum:</p>
                        <p>${moreInfo.engines.isp.vacuum}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Vacuum kN:</p>
                        <p>${moreInfo.engines.thrust_vacuum.kN}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Vacuum lbf:</p>
                        <p>${moreInfo.engines.thrust_vacuum.lbf}</p>
                    </div>
                    <div class="data__int">
                        <p>Sea Level:</p>
                        <p>${moreInfo.engines.isp.sea_level}</p>
                    </div>
                    <div class="data__int">
                        <p>Sea Level kN:</p>
                        <p>${moreInfo.engines.thrust_sea_level.kN}</p>
                    </div>
                    <div class="data__int">
                        <p>Sea Level lbf</p>
                        <p>${moreInfo.engines.thrust_sea_level.lbf}</p>
                    </div>
                    <div class="data__int">
                        <p>Type:</p>
                        <p>${moreInfo.engines.type}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Number:</p>
                        <p>${moreInfo.engines.number}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Version:</p>
                        <p>${moreInfo.engines.version}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Layout:</p>
                        <p>${moreInfo.engines.layout}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Loss Max:</p>
                        <p>${moreInfo.engines.engine_loss_max}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Propellant 1:</p>
                        <p>${moreInfo.engines.propellant_1}</p>
                    </div>
                    <div class="data__int">
                        <p>Propellant 2</p>
                        <p>${moreInfo.engines.propellant_2}</p>
                    </div>
                    <div class="data__int">
                        <p>Thrust To Weight:</p>
                        <p>${moreInfo.engines.thrust_to_weight}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="section__image" class="section__image">
            <img src="${moreInfo.flickr_images}"referrerpolicy="no-referrer" width=300px heigth=350px>
            <div class="more__info">
                <h4> For more info: </h4>
                <a href="${moreInfo.wikipedia}">Wikipedia</a>
            </div>
        </div>
        <div class="section__information__2">
            <div class="info__table2">
                <h2>Stats in Stages</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.second_stage.thrust.kN}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Thrust lbf:</p>
                        <p>${moreInfo.second_stage.thrust.lbf}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Payloads Height Meters:</p>
                        <p>${moreInfo.second_stage.payloads.composite_fairing.height.meters}</p>
                    </div>
                    <div class="data__int">
                        <p>Payloads Height feets:</p>
                        <p>${moreInfo.second_stage.payloads.composite_fairing.height.feet}</p>
                    </div>
                    <div class="data__int">
                        <p>Payloads Diameter Meters:</p>
                        <p>${moreInfo.second_stage.payloads.composite_fairing.diameter.meters}</p>
                    </div>
                    <div class="data__int">
                        <p>Payloads Diameter Feets:</p>
                        <p>${moreInfo.second_stage.payloads.composite_fairing.diameter.feet}</p>
                    </div>
                    <div class="data__int">
                        <p>Option 1:</p>
                        <p>${moreInfo.second_stage.payloads.option_1}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Number:</p>
                        <p>${moreInfo.second_stage.reusable}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Version:</p>
                        <p>${moreInfo.second_stage.engines}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Layout:</p>
                        <p>${moreInfo.second_stage.fuel_amount_tons}</p>
                    </div>
                    <div class="data__int"> 
                        <p>Loss Max:</p>
                        <p>${moreInfo.second_stage.burn_time_sec}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>  
    <footer class="footer">
        <ul>
            <li>
                <div class="rocket">
                    <a href="#">
                        <img src="./storage/imgs/icons/rocket.svg">
                        <span>Rockets</span>
                    </a>
                </div>
            </li>
            <li>
                <div class="capsules">
                    <a href="#">
                        <img src="./storage/imgs/icons/capsule.svg">
                        <span>Capsules</span>
                    </a>
                </div>
            </li>
            <li id="company">
                <a href="#">
                    <img src="./storage/imgs/icons/company.png">
                    <span>Company</span>
                </a>
            </li>
            <li id="cores">
                <a href="#">
                    <img src="./storage/imgs/icons/cores.png">
                    <span>Cores</span>
                </a>
            </li>
            <li id="crew">
                <a href="#">
                    <img src="./storage/imgs/icons/crew.png">
                    <span>Crew</span>
                </a>
            </li>
            <li id="dragons">
                <a href="#">
                    <img src="./storage/imgs/icons/dragons.png">
                    <span>Dragons</span>
                </a>
            </li>
            <li id="history">
                <a href="#">
                    <img src="./storage/imgs/icons/history.png">
                    <span>History</span>
                </a>
            </li>
            <li id="landpads">
                <a href="#">
                    <img src="./storage/imgs/icons/landpads.png">
                    <span>Landpads</span>
                </a>
            </li>
            <li id="launches">
                <a href="#">
                    <img src="./storage/imgs/icons/launches.png">
                    <span>Launches</span>
                </a>
            </li>
        </ul>
    </footer>
`
}

export const lastInfoRocket = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#information__2").innerHTML = /*html*/`
        
    <div class="bar">   
        <div class="up__item1">
            <p>Cost Per Launch<p>
            <div class="number">
                <h1>$${moreInfo.cost_per_launch}</h1>
            </div>
            <progress id="color" value="${(moreInfo.cost_per_launch)/1000000}" max="100"></progress>
        </div>
            <div class="up__item2"> 
            <p>Succes Rate PCT</p>
                <div class="number">
                    <h1>${moreInfo.success_rate_pct}</h1>
                </div>
                <progress id="grey" value="${moreInfo.success_rate_pct}" max="100"></progress>
        </div>
    </div>
    
`}

export const infoImgsRockets = async (moreInfo) => {
    console.log(moreInfo);

    console.log(moreInfo.flickr_images)

    const img = async ()=>{
        let plantilla = '';
        let imagenes = moreInfo.flickr_images;
        imagenes.forEach(element => {
        plantilla +=/*html*/`<img src= ${element} referrerpolicy="no-referrer">;`
        });
        return plantilla;
    }


    console.log(await img());

};