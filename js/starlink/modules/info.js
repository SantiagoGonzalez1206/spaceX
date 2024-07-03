export const idStarlink = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};



export const nameStarlink = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};



export const getStarlinkNameById = async (id) => {
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
                "select": "spaceTrack.OBJECT_NAME"
            }
        })
    };
    
    const res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getStarlinkMoreInfoById = async (id) => {
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
                "select": "spaceTrack.CCSDS_OMM_VERS spaceTrack.COMMENT spaceTrack.CREATION_DATE spaceTrack.ORIGINATOR spaceTrack.OBJECT_NAME spaceTrack.OBJECT_ID spaceTrack.CENTER_NAME spaceTrack.REF_FRAME spaceTrack.TIME_SYSTEM spaceTrack.MEAN_ELEMENT_THEORY spaceTrack.EPOCH spaceTrack.MEAN_MOTION spaceTrack.ECCENTRICITY spaceTrack.INCLINATION spaceTrack.RA_OF_ASC_NODE spaceTrack.ARG_OF_PERICENTER spaceTrack.MEAN_ANOMALY spaceTrack.EPHEMERIS_TYPE spaceTrack.CLASSIFICATION_TYPE spaceTrack.NORAD_CAT_ID spaceTrack.ELEMENT_SET_NO spaceTrack.REV_AT_EPOCH spaceTrack.BSTAR spaceTrack.MEAN_MOTION_DOT spaceTrack.MEAN_MOTION_DDOT spaceTrack.SEMIMAJOR_AXIS spaceTrack.PERIOD spaceTrack.APOAPSIS spaceTrack.PERIAPSIS spaceTrack.OBJECT_TYPE spaceTrack.RCS_SIZE spaceTrack.COUNTRY_CODE spaceTrack.LAUNCH_DATE spaceTrack.SITE spaceTrack.DECAY_DATE spaceTrack.DECAYED spaceTrack.FILE spaceTrack.GP_ID spaceTrack.TLE_LINE0 spaceTrack.TLE_LINE1 spaceTrack.TLE_LINE2 version launch longitude latitude height_km velocity_kms"
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}
