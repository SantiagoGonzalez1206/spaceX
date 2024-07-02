export const idDragon = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};



export const nameDragon = async () => {
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

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};



export const getDragonNameById = async (id) => {
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
    
    const res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}


export const getDragonMoreInfoById = async (id) => {
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
            "select": "heat_shield.material heat_shield.size_meters heat_shield.temp_degrees heat_shield.dev_partner launch_payload_mass.kg launch_payload_mass.lb launch_payload_vol.cubic_meters launch_payload_vol.cubic_feet return_payload_mass.kg return_payload_mass.lb return_payload_vol.cubic_meters return_payload_vol.cubic_feet pressurized_capsule.payload_volume.cubic_meters pressurized_capsule.payload_volume.cubic_feet trunk.trunk_volume.cubic_meters trunk.trunk_volume.cubic_feet trunk.cargo.solar_array trunk.cargo.unpressurized_cargo height_w_trunk.meters height_w_trunk.feet diameter.meters diameter.feet first_flight flickr_images name type active crew_capacity sidewall_angle_deg orbit_duration_yr dry_mass_kg dry_mass_lb thrusters.type thrusters.amount thrusters.pods thrusters.fuel_1 thrusters.fuel_2 thrusters.isp thrusters.thrust.kN thrusters.thrust.lbf wikipedia description id"
            } 
        })
    };
    const res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}

