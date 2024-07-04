export const namePayload = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

export const infoPayload = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
            <h3>Reference System</h3>
            <br>
            <p class="description__all">${moreInfo.reference_system}</p>
            <br>
            <div class="info">
                <div class="info__item">
                    <img src="storage/imgs/icons/numero1.png">
                    <div class="info__item_text">  
                        <h4>Type</h4>
                        <p>${moreInfo.type}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero2.png">
                    <div class="info__item_text">  
                        <h4>Regime</h4>
                        <p>${moreInfo.regime}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero3.png">
                    <div class="info__item_text">  
                        <h4>Reused?</h4>
                        <p>${moreInfo.reused}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}



export const moreInfoPayload = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#main__section").innerHTML = /*html*/`
    <article id="section__information__1" class="section__information__1">
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.mass_kg/10}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Mass:</b>${moreInfo.mass_kg} Kg</div></div>
        <div class="item__progress__bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, #0400ff ${moreInfo.mean_motion}%, rgba(255, 192, 203, 0) 0);  "><div class="externo"><b>Mean Motion:</b>${moreInfo.mean_motion}</div></div>    
    </article>
    <article class="section__information__container">
        <div class="section__information__2">
            <div class="info__table1">
                <h2>Info Payload</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Periapsis:</p>
                        <p>${moreInfo.periapsis_km} Km</p>
                    </div>
                    <div class="data__int">
                        <p>Orbit:</p>
                        <p>${moreInfo.orbit}</p>
                    </div>
                    <div class="data__int">
                        <p>Longitude:</p>
                        <p>${moreInfo.longitude}</p>
                    </div>
                    <div class="data__int">
                        <p>Semi Major Axis:</p>
                        <p>${moreInfo.semi_major_axis_km} Km</p>
                    </div>
                    <div class="data__int">
                        <p>Eccentricity:</p>
                        <p>${moreInfo.eccentricity}</p>
                    </div>
                    <div class="data__int">
                        <p>Mean Motion:</p>
                        <p>${moreInfo.mean_motion}</p>
                    </div>
                    <div class="data__int">
                        <p>Raan:</p>
                        <p>${moreInfo.raan}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="section__image" class="section__image">
            <img src="../storage/imgs/spacePayload.webp" width="400px" heigth="400px" >
        </div>
        <div class="section__information__2">
            <div class="info__table1">
                <h2>Specifications Payloads</h2>
                <hr>
                <div class="info__data">
                    <div class="data__int">
                        <p>Apoapsis:</p>
                        <p>${moreInfo.apoapsis_km} Km</p>
                    </div>
                    <div class="data__int">
                        <p>Inclination Deg:</p>
                        <p>${moreInfo.inclination_deg}</p>
                    </div>
                    <div class="data__int">
                        <p>Period Min:</p>
                        <p>${moreInfo.period_min}</p>
                    </div>
                    <div class="data__int">
                        <p>Lifespan Years:</p>
                        <p>${moreInfo.lifespan_years}</p>
                    </div>
                    <div class="data__int">
                        <p>Epoch:</p>
                        <p>${moreInfo.epoch}</p>
                    </div>
                    <div class="data__int">
                        <p>Arg Of Pericenter:</p>
                        <p>${moreInfo.arg_of_pericenter}</p>
                    </div>
                    <div class="data__int">
                        <p>Mean Anomaly:</p>
                        <p>${moreInfo.mean_anomaly}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="general">
            <h2>Payloads</h2>
            <button onclick="window.location.reload();" id="back">BACK!</button>
        <div>
    </article>  
`
}
