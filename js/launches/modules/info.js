export const idLaunch = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config);
    let { docs } = await res.json();
    return docs
};



export const nameLaunch = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config);
    let { docs } = await res.json();
    return docs
};



export const getLaunchNameById = async (id) => {
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
    
    const res = await fetch("https://api.spacexdata.com/v4/launches/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getLaunchMoreInfoById = async (id) => {
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
            "select": "fairings links.patch.small links.patch.large links.reddit.campaign links.reddit.launch links.reddit.media links.reddit.recovery links.flickr.small links.flickr.original links.presskit links.webcast links.youtube_id links.article links.wikipedia static_fire_date_utc static_fire_date_unix tdb net window rocket success failures details crew ships capsules payloads launchpad auto_update flight_number date_utc date_unix date_local date_precision upcoming cores core flight gridfins legs reused landing_attempt landing_success landing_type landpad"
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/launches/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

