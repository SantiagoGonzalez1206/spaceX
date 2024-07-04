export const nameLaunchpad = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const infoLaunchpad = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
            <h3>Full Name</h3>
            <br>
            <p class="description__all">${moreInfo.full_name}</p>
            <br>
            <div class="info">
                <div class="info__item">
                    <img src="storage/imgs/icons/numero1.png">
                    <div class="info__item_text">  
                        <h4>Status</h4>
                        <p>${moreInfo.status}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero2.png">
                    <div class="info__item_text">  
                        <h4>First Flight</h4>
                        <p>${moreInfo.region}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}



export const moreInfoLaunchpads = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.launch_attempts}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Launch Attempts:</b>${moreInfo.launch_attempts}</div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.launch_successes}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Launch Successes:</b>${moreInfo.launch_successes}</div></div>    
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="info__table1">
                <h2>Ubication</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Locality:</p>
                        <p>${moreInfo.locality}</p>
                    </div>
                </div>
                <div class="info__data">
                    <div class="data__int">
                        <p>Region:</p>
                        <p>${moreInfo.region}</p>
                    </div>
                </div>
                <div class="info__data">
                    <div class="data__int">
                        <p>Timezone:</p>
                        <p>${moreInfo.timezone}</p>
                    </div>
                </div>
                <div class="info__data">
                    <div class="data__int">
                        <p>Latitude:</p>
                        <p>${moreInfo.latitude}</p>
                    </div>
                </div>
                <div class="info__data">
                    <div class="data__int">
                        <p>Longitude:</p>
                        <p>${moreInfo.longitude}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="section__image" class="section__image">
            
        </div>
        <div class="section__information__2">
            <img src="../storage/imgs/spaceLaunchpads.gif" width="400px" heigth="400px" >
        </div>
        <div class="general">
            <h2>Launchpads</h2>
            <button onclick="window.location.reload();" id="back">BACK!</button>
        <div>
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
                <hr>
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
