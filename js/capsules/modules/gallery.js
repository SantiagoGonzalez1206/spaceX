export const serialCapsule = async (serial) => {
    document.querySelector("#header__title").innerHTML = serial;
}

export const moreInfoCapsule = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.water_landings*10}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Water Landings:</b>${moreInfo.water_landings}</div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.reuse_count*10}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Reuse Count:</b>${moreInfo.reuse_count}</div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.land_landings*10}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Land Landings</b>${moreInfo.land_landings}</div></div>
    </article>
    <article class="section__information__container">
    <div class="section__information__2">
        <div class="info__table2cap">
            <h2>Type</h2>
            <hr>
            <div class="info__data">
                <div class="data__int">
                    <p>${moreInfo.type}</p>
                </div>
            </div>
        </div>
        <div class="info__table2cap">
            <h2>Last Update</h2>
            <hr>
            <div class="info__data">
                <div class="data__int">
                    <p>${moreInfo.last_update}</p>
                </div>
            </div>
        </div>
    </div>
    <div id="section__image" class="section__image">
        <img src="../storage/imgs/spaceCapsules.webp"referrerpolicy="no-referrer" width=300px heigth=350px>
    </div>
        <div class="section__information__2">
            <div class="info__table2cap">
            <h2>Status</h2>
            <hr>
            <div class="info__data">
                <div class="data__int">
                    <p>${moreInfo.status}</p>
                </div>
            </div>
        </div>
        <div class="info__table2cap">
            <h2>Launches</h2>
            <hr>
            <div class="info__data">
                <div class="data__int">
                    <p>${moreInfo.launches}</p>
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