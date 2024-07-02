export const moreInfoCores = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.rtls_attempts}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>RTLS Attempts:</b>${moreInfo.rtls_attempts} </div></div>
        <div class="serialCore">
            <h1>${moreInfo.serial}</h1>
        </div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.asds_attempts}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>ASDS Attempts:</b>${moreInfo.asds_attempts}</div></div>
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="item__progress__bar" style="background: 
            radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
            conic-gradient(from 180deg, #0400ff ${moreInfo.rtls_landings}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>RTLS Landings:</b>${moreInfo.rtls_landings}</div></div>
        </div>
        <div id="section__image" class="section__image1">
            <div class="lastUpdate">
                <h1>Last Update</h1>
                <p class="si">${moreInfo.last_update}</p>
                <h1> Status: <h1>
                <p> ${moreInfo.status}
            </div>
            <img src="../storage/imgs/spaceCores.webp"referrerpolicy="no-referrer" width=300px heigth=350px>
        </div>
        <div class="section__information__2Cores">
            <div class="item__progress__bar" style="background: 
            radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
            conic-gradient(from 180deg, #0400ff ${moreInfo.asds_landings}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>ASDS Landings:</b>${moreInfo.asds_landings}</div></div>
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
