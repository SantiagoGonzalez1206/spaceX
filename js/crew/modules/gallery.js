export const nameCrew = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const moreInfoCrew = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
    <div class="more__infoCrew">
        <h4> For more info:</h4><br>
        <a href="${moreInfo.wikipedia}">Wikipedia</a>
    </div>
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="info__table1Crew">
                <h2>Status:</h2>
                <p>${moreInfo.status}</p>
            </div>
        </div>
        <div id="section__image" class="section__image">
            <img src="${moreInfo.image}"referrerpolicy="no-referrer" width=300px heigth=350px>
        </div>
        <div class="section__information__2">
            <div class="info__table2Crew">
                <h2>Agency:</h2>
                <p>${moreInfo.agency}</p>
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