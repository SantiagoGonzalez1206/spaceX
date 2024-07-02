export const idLaunchpad = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/launchpads/query", config);
    let { docs } = await res.json();
    return docs
};



export const nameLaunchpad = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/launchpads/query", config);
    let { docs } = await res.json();
    return docs
};



export const getLaunchpadNameById = async (id) => {
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
    
    const res = await fetch("https://api.spacexdata.com/v4/launchpads/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getLaunchpadMoreInfoById = async (id) => {
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
            "select": "full_name locality region timezone latitude longitude launch_attempts launch_successes rockets launches status"            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/launchpads/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

