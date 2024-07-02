export const idLandpad = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config);
    let { docs } = await res.json();
    return docs
};



export const nameLandpad = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config);
    let { docs } = await res.json();
    return docs
};



export const getLandpadNameById = async (id) => {
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
    
    const res = await fetch("https://api.spacexdata.com/v4/landpads/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getLandpadMoreInfoById = async (id) => {
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
            "select": "full_name status type locality region latitude longitude landing_attempts landing_successes wikipedia details launches"
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/landpads/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

