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
        <div class="general">
            <h2>Crew</h2>
            <button onclick="window.location.reload();" id="back">BACK!</button>
        <div>
    </article>  
`
}