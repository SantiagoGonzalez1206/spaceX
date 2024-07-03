export const nameLaunch = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const infoLaunch = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
            <div class="info">
                <div class="info__item">
                    <img src="storage/imgs/icons/numero1.png">
                    <div class="info__item_text">  
                        <h4>Dates:</h4>
                        <p>Date UTC: ${moreInfo.date_utc}</p>
                        <p>Date Unix: ${moreInfo.date_unix}</p>
                        <p>Date Local: ${moreInfo.date_local}</p>
                        <p>Date Precision: ${moreInfo.date_precision}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero2.png">
                    <div class="info__item_text">  
                        <h4>Flight Number</h4>
                        <p>${moreInfo.flight_number}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero3.png">
                    <div class="info__item_text">  
                        <h4>Auto Update</h4>
                        <p>${moreInfo.auto_update}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}



export const moreInfoLaunch = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <img src="${moreInfo.links.flickr.original}"referrerpolicy="no-referrer" width=300px heigth=150px>
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="info__table8">
                <h2>Links</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <a href="${moreInfo.links.presskit}">Presskit</a>
                    </div>
                </div>
                <div class="info__data">
                    <div class="data__int">
                        <a href="${moreInfo.links.webcast}">Webcast:</a>
                    </div>
                </div>
                <div class="info__data">
                    <div class="data__int">
                        <p>Youtube ID:</p>
                        <p>${moreInfo.links.youtube_id}</p>
                    </div>
                </div>
                <div class="info__data">
                    <div class="data__int">
                        <a href="${moreInfo.links.article}">Article:</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="section__image" class="section__image">
            <img src="${moreInfo.links.patch.small}"referrerpolicy="no-referrer" width=300px heigth=350px>
            <div class="more__info">
                <h4> For more info: </h4>
                <a href="${moreInfo.links.wikipedia}">Wikipedia</a>
            </div>
        </div>
        <div class="section__information__2">
            <div class="info__table8">
                <h2>Launch Data</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int1">
                        <p>${moreInfo.details}</p>
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
            </li>
        </ul>
    </footer>
`
}


export const lastInfoLaunch = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#information__2").innerHTML = /*html*/`
        
    <div class="bar">   
        <img src="../storage/imgs/spaceLandpad.webp"referrerpolicy="no-referrer" width=200px heigth=250px>
    </div>
    
`}