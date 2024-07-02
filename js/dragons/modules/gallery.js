export const nameDragon = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const infoDragon = async (moreInfo) => {
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
                        <h4>Type</h4>
                        <p>${moreInfo.type}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero2.png">
                    <div class="info__item_text">  
                        <h4>First Flight</h4>
                        <p>${moreInfo.first_flight}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero3.png">
                    <div class="info__item_text">  
                        <h4>Active?</h4>
                        <p>${moreInfo.active}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}



export const moreInfoDragon = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.launch_payload_mass.kg/100}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Launch Payload Mass:</b>${moreInfo.launch_payload_mass.kg} Kg </div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.return_payload_mass.kg/100}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Return Payload Mass:</b>${moreInfo.return_payload_mass.kg} Kg </div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.return_payload_vol.cubic_meters}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Return Payload Vol:</b>${moreInfo.return_payload_vol.cubic_meters} m²</div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.launch_payload_vol.cubic_meters}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Launch Payload Vol:</b>${moreInfo.launch_payload_vol.cubic_meters} m²</div></div>
    
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="info__table1">
                <h2>Shields</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Shield Material:</p>
                        <p>${moreInfo.heat_shield.material}</p>
                    </div>
                    <div class="data__int">
                        <p>Shield Size:</p>
                        <p>${moreInfo.heat_shield.size_meters} m</p>
                    </div>
                    <div class="data__int">
                        <p>Shield Temperature Degrees:</p>
                        <p>${moreInfo.heat_shield.temp_degrees}</p>
                    </div>
                    <div class="data__int">
                        <p>Shield Partner:</p>
                        <p>${moreInfo.heat_shield.dev_partner}</p>
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
                <h2>Trunks</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.trunk.trunk_volume.cubic_meters}</p>
                    </div>
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.trunk.trunk_volume.cubic_feet}</p>
                    </div>
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.trunk.cargo.solar_array}</p>
                    </div>
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.trunk.cargo. unpressurized_cargo}</p>
                    </div>
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.height_w_trunk.meters}</p>
                    </div>
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.height_w_trunk.feet}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>  
    <footer class="footer">
        <ul>
            <li class="rocket">
                <a href="#">
                    <img src="./storage/imgs/icons/rocket.svg">
                    <span>Rockets</span>
                </a>
            </li>
            <li class="capsules">
                <a href="#">
                    <img src="./storage/imgs/icons/capsule.svg">
                    <span>Capsules</span>
                </a> 
            </li>
            <li class="cores">
                <a href="#">
                    <img src="./storage/imgs/icons/cores.png">
                    <span>Cores</span>
                </a> 
            </li>
            <li class="crew">
                    <a href="#">
                    <img src="./storage/imgs/icons/crew.png">
                    <span>Crew</span>
                </a> 
            <li class="dragons">
                <a href="#">
                    <img src="./storage/imgs/icons/dragons.png">
                    <span>Dragons</span>
                </a>
            </li>
            <li class="history">
                <a href="#">
                    <img src="./storage/imgs/icons/history.png">
                    <span>History</span>
                </a>
            </li>
            <li class="landpads">
                <a href="#">
                    <img src="./storage/imgs/icons/landpads.png">
                    <span>Landpads</span>
                </a>
            </li>
            <li class="launches">
                <a href="#">
                    <img src="./storage/imgs/icons/launches.png">
                    <span>Launches</span>
                </a>
            </li>
            <li class="launchpads">
                <a href="#">
                    <img src="./storage/imgs/icons/launchpad.png">
                    <span>Launchpads</span>
                </a>
            </li>
            <li class="payloads">
                <a href="#">
                    <img src="./storage/imgs/icons/payload.png">
                    <span>Payloads</span>
                </a>
            </li>
            <li class="roadster">
                <a href="#">
                    <img src="./storage/imgs/icons/roadster.png">
                    <span>Roadster</span>
                </a>
            </li>
            <li class="ships">
                <a href="#">
                    <img src="./storage/imgs/icons/ship.png">
                    <span>Ships</span>
                </a>
            </li>
            <li class="starlink">
                <a href="#">
                    <img src="./storage/imgs/icons/starlink.png">
                    <span>Starlink</span>
                </a>
            </li>
        </ul>
    </footer>
`
}

