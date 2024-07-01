export const serialCapsule = async (serial) => {
    document.querySelector("#header__title").innerHTML = serial;
}

export const infoCapsule = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
            <h3>Description</h3>
            <br>
            <p class="description__all">${moreInfo.reuse_count}</p>
            <br>
            <div class="info">
                <div class="info__item">
                    <img src="storage/imgs/icons/numero1.png">
                    <div class="info__item_text">  
                        <h4>Country</h4>
                        <p>${moreInfo.water_landings}</p>
                    </div>
                </div>
                <div class="info__item">
                    <img src="storage/imgs/icons/numero2.png">
                    <div class="info__item_text">  
                        <h4>First Flight</h4>
                        <p>${moreInfo.land_landings}</p>
                    </div>
                </div>
            </div>
            
    ` ;

}
