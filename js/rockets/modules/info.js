export const idRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};



export const nameRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "name"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};



export const getRocketNameById = async (id) => {
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": { 
                "_id": id 
            },
            "options": {
                "select": "name"
            }
        })
    };
    
    const res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getRocketMoreInfoById = async (id) => {
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
              "_id": id
            },
            "options": {
            "select": "success_rate_pct second_stage.burn_time_sec second_stage.fuel_amount_tons second_stage.engines second_stage.reusable second_stage.payloads.option_1 second_stage.payloads.composite_fairing.diameter.meters second_stage.payloads.composite_fairing.diameter.feet second_stage.payloads.composite_fairing.height.feet second_stage.payloads.composite_fairing.height.meters second_stage.thrust.lbf second_stage.thrust.kN engines.thrust_to_weight engines.propellant_2 engines.propellant_1 engines.engine_loss_max engines.layout engines.version engines.number engines.thrust_vacuum.lbf engines.thrust_vacuum.kN engines.thrust_sea_level.lbf engines.type engines.thrust_sea_level.kN mass.kg mass.lb diameter.meters diameter.feet height.meters height.feet flickr_images engines.isp.vacuum engines.isp.sea_level first_stage.engines type cost_per_launch country wikipedia description first_flight "
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

