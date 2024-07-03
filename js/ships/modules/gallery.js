export const nameShips = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const infoShips = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
            <h3>Legacy ID</h3>
            <br>
            <p class="description__all">${moreInfo.legacy_id}</p>
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
                        <h4>Home Port</h4>
                        <p>${moreInfo.home_port}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero3.png">
                    <div class="info__item_text">  
                        <h4>Year Built</h4>
                        <p>${moreInfo.year_built}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}



export const moreInfoShips = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.mass_kg/10000}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Mass:</b>${moreInfo.mass_kg} Kg</div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.mass_lbs/50000}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Mass:</b>${moreInfo.mass_lbs} Lbs</div></div>    
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="item__progress__bar" style="background: 
            radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
            conic-gradient(from 180deg, #0400ff ${moreInfo.abs/100000}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>ABS::</b>${moreInfo.abs}</div></div>    
        </div>
        <div id="section__image" class="section__image">
            <img src="${moreInfo.image}" width="350px" heigth="350px" referrerpolicy="no-referrer">
            <div class="more__info">
                <h4> For more info: </h4>
                <a href="${moreInfo.link}">Link</a>
            </div>
        </div>
        <div class="section__information__2">
            <div class="item__progress__bar1" style="background: 
            radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
            conic-gradient(from 180deg, #0400ff ${moreInfo.class/900000}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Class:</b>${moreInfo.class}</div></div>    
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
            <li class="ships">
                <a href="#">
                    <img src="./storage/imgs/icons/ship.png">
                    <span>Ships</span>
                </a>
                <hr>
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