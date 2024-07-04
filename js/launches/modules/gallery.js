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
        <div class="general">
            <h2>Launches</h2>
            <button onclick="window.location.reload();" id="back">BACK!</button>
        <div>
    </article>  
`
}


export const lastInfoLaunch = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#information__2").innerHTML = /*html*/`
        
    <div class="bar">   
        <img src="../storage/imgs/spaceLandpad.webp"referrerpolicy="no-referrer" width=200px heigth=250px>
    </div>
    
`}