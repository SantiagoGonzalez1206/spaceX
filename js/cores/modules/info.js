export const serialCore = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs } = await res.json();
    return docs
};
console.log(serialCore());

export const idCores = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs } = await res.json();
    return docs
};





export const getCoreSerialById = async (id) => {
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
    
    const res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getCoreMoreInfoById = async (id) => {
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
            "select": "serial status launches last_update asds_landings asds_attempts rtls_landings rtls_attempts reuse_count block" 
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}
