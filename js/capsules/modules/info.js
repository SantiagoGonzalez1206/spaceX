export const serialCapsule = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "serial"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs } = await res.json();
    return docs
};

export const idCapsule = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs } = await res.json();
    return docs
};

export const getCapsuleSerialById = async (id) => {
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
                "select": "serial"
            }
        })
    };
    
    const res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].serial : "Not found";
}


export const getCapsuleMoreInfoById = async (id) => {
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
            "select": "reuse_count water_landings land_landings last_update launches status type"
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}