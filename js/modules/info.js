
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

export const countryRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "country"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

export const descriptionRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "description"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};


export const costPerLaunchRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "cost_per_launch"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

export const firstFlightRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "first_flight"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

export const wikipediaRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "wikipedia"
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
            "select": "flickr_images engines.isp.vacuum engines.isp.sea_level first_stage.engines type cost_per_launch country wikipedia description first_flight "
            }
        })
    };

    const res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

