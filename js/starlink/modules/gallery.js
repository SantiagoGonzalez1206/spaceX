

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
                <h2>Measurements</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Longitude:</p>
                        <p>${moreInfo.longitude}</p>
                    </div>
                    <div class="data__int">
                        <p>Latitude:</p>
                        <p>${moreInfo.latitude}</p>
                    </div>
                    <div class="data__int">
                        <p>Height:</p>
                        <p>${moreInfo.height_km} km</p>
                    </div>
                    <div class="data__int">
                        <p>Velocity:</p>
                        <p>${moreInfo.velocity_kms} km</p>
                    </div>
                    <div class="data__int">
                        <p>Eccentricity:</p>
                        <p>${moreInfo.spaceTrack.ECCENTRICITY}</p>
                    </div>
                    <div class="data__int">
                        <p>Inclination:</p>
                        <p>${moreInfo.spaceTrack.INCLINATION}</p>
                    </div>
                    <div class="data__int">
                        <p>Pericenter:</p>
                        <p>${moreInfo.spaceTrack.ARG_OF_PERICENTER}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="section__image" class="section__image">
            <img src="../storage/imgs/spaceStarlink.gif"referrerpolicy="no-referrer" width=300px heigth=350px>
        </div>
        <div class="section__information__2">
            <div class="info__table2">
                <h2>Starlink Info</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Originator:</p>
                        <p>${moreInfo.spaceTrack.ORIGINATOR}</p>
                    </div>
                    <div class="data__int">
                        <p>Time Sistem:</p>
                        <p>${moreInfo.spaceTrack.TIME_SYSTEM}</p>
                    </div>
                    <div class="data__int">
                        <p>Classification Type:</p>
                        <p>${moreInfo.spaceTrack.CLASSIFICATION_TYPE}</p>
                    </div>
                    <div class="data__int">
                        <p>Country Code:</p>
                        <p>${moreInfo.spaceTrack.COUNTRY_CODE}</p>
                    </div>
                    <div class="data__int">
                        <p>Site:</p>
                        <p>${moreInfo.spaceTrack.SITE}</p>
                    </div>
                    <div class="data__int">
                        <p>Period:</p>
                        <p>${moreInfo.spaceTrack.PERIOD}</p>
                    </div>
                    <div class="data__int">
                        <p>Periapsis:</p>
                        <p>${moreInfo.spaceTrack.PERIAPSIS}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="general">
            <h2>Starlink</h2>
            <button onclick="window.location.reload();" id="back">BACK!</button>
        <div>
    </article>   
`
}