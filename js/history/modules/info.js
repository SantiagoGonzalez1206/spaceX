export const titleHistory = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": "title"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/history/query", config);
    let { docs } = await res.json();
    return docs
};


export const idHistory = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/history/query", config);
    let { docs } = await res.json();
    return docs
};





export const getHistoryTileById = async (id) => {
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
                "select": "title"
            }
        })
    };
    
    const res = await fetch("https://api.spacexdata.com/v4/history/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getHistoryMoreInfoById = async (id) => {
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
            "select": "title event_date_utc event_date_unix details links.article" 
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/history/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}