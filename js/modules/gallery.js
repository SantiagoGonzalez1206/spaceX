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
                        <h4>Cost Per Launch</h4>
                        <p>$${moreInfo.cost_per_launch}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero3.png">
                    <div class="info__item_text">  
                        <h4>First Flight</h4>
                        <p>${moreInfo.first_flight}</p>
                    </div>
                </div>
            </div>
            <div class="more__info">
                <h4> For more info: </h4>
                <a href="${moreInfo.wikipedia}">Wikipedia</a>
            </div>
    ` ;

}


export const moreInfoRocket = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.first_stage.engines}%, rgba(255, 192, 203, 0) 0);  "><b>Engines:</b><br>${moreInfo.first_stage.engines}</div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff 25%, rgba(255, 192, 203, 0) 0);  "><b>vacuum:<br><br></b>${moreInfo.engines.isp.vacuum}<br></div>
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div>
                <div class="load" style="height: 150px;">${moreInfo.type}</div>
            </div>
            <div id="information__table__1" class="information__table__1">
                <div class="load" style="height: 160px;"></div>
            </div>
        </div>
        <div id="section__image" class="section__image">
            <div class="load" style="height: 350px"></div>
        </div>
        <div class="section__information__3">
            <div>
                <div class="load" style="height: 150px;"></div>
            </div>
            <div id="information__table__2" class="information__table__2">
                <div class="load" style="height: 160px;"></div>
            </div>
        </div>
    </article>  
    <footer class="footer">
        <ul>
            <li id="rocket">
                <a class="select" href="#">
                    <img src="./storage/imgs/icons/rocket.svg">
                    <span>Rockets</span>
                </a>
            </li>
            <li id="capsules">
                <a href="#">
                    <img src="./storage/imgs/icons/capsule.svg">
                    <span>Capsules</span>
                </a>
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

