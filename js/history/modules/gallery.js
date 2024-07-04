export const moreInfoHistory = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
         <div class="serialCore">
            <h1>${moreInfo.title}</h1>
        </div>
    </article>
    <article class="section__information__container">
        <div class="lastUpdate">
            <h1>Event Date UTC</h1>
            <p class="si">${moreInfo.event_date_utc}</p>
            <h1>Event Date Unix: <h1>
            <p> ${moreInfo.event_date_unix}</p>
        </div>
        <div id="section__image" class="section__image2">
            <img src="../storage/imgs/spaceHistory.gif"referrerpolicy="no-referrer" width=300px heigth=350px>
            <div class="more__infoHis">
                <h4> For more info: </h4>
                <a href="${moreInfo.links.article}">Article</a>
            </div>
        </div>
        <div class="section__information__2Cores">
            <div class="lastUpdate">
                <h1>Details</h1>
                <p class="si">${moreInfo.details}</p>
            </div>
        </div>
        <div class="general">
            <h2>History</h2>
            <button onclick="window.location.reload();" id="back">BACK!</button>
        <div>
    </article>  
`
}