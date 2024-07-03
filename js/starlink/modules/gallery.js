

export const infoStarlink = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
            <h3>Comment</h3>
            <br>
            <p class="description__all">${moreInfo.spaceTrack.COMMENT}</p>
            <br>
            <div class="info">
                <div class="info__item">
                    <img src="storage/imgs/icons/numero1.png">
                    <div class="info__item_text">  
                        <h4>Creation Date</h4>
                        <p>${moreInfo.spaceTrack.CREATION_DATE}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero2.png">
                    <div class="info__item_text">  
                        <h4>Object Type</h4>
                        <p>${moreInfo.spaceTrack.OBJECT_TYPE}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero3.png">
                    <div class="info__item_text">  
                        <h4>Launch Date</h4>
                        <p>${moreInfo.spaceTrack.LAUNCH_DATE}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}



export const moreInfoStarlink = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.spaceTrack.INCLINATION}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Inclination:</b>${moreInfo.spaceTrack.INCLINATION}</div></div>
        <h1>${moreInfo.spaceTrack.OBJECT_NAME}</h1>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.spaceTrack.MEAN_MOTION}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Mean Motion:</b>${moreInfo.spaceTrack.MEAN_MOTION}</div></div>    
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="info__table1">
                <h2>Engines</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Vacuum:</p>
                        <p>${moreInfo.spaceTrack.MEAN_MOTION}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="section__image" class="section__image">
            <img src=""referrerpolicy="no-referrer" width=300px heigth=350px>
        </div>
        <div class="section__information__2">
            <div class="info__table2">
                <h2>Stats in Stages</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Thrust kN:</p>
                        <p>${moreInfo.spaceTrack.MEAN_MOTION}</p>
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
                <hr>
            </li>
        </ul>
    </footer>
`
}