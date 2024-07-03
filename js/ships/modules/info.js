export const idShips = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};



export const nameShips = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};



export const getShipsNameById = async (id) => {
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
    
    const res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getShipsMoreInfoById = async (id) => {
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
                "select": "legacy_id model type roles imo mmsi abs class mass_kg mass_lbs year_built home_port status speed_kn course_deg latitude longitude last_ais_update link image launches active"
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

