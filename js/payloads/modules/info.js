export const idPayload = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config);
    let { docs } = await res.json();
    return docs
};



export const namePayload = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config);
    let { docs } = await res.json();
    return docs
};



export const getPayloadNameById = async (id) => {
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
    
    const res = await fetch("https://api.spacexdata.com/v4/payloads/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getPayloadMoreInfoById = async (id) => {
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
            "select": "dragon.capsule dragon.mass_returned_kg dragon.mass_returned_lbs dragon.flight_time_sec dragon.manifest dragon.water_landing dragon.land_landing type reused launch customers norad_ids nationalities manufacturers mass_kg mass_lbs orbit reference_system regime longitude semi_major_axis_km eccentricity periapsis_km apoapsis_km inclination_deg period_min lifespan_years epoch mean_motion raan arg_of_pericenter mean_anomaly"
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/payloads/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

