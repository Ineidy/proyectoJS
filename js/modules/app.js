export const getRockets = async() =>{
    const url = "https://api.spacexdata.com/v4/rockets";
const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}

export const getShips = async() => {
    const url = 'https://api.spacexdata.com/v4/ships' ;
    const options = {
        method: 'GET'
    };

    let data = await fetch (url, options)
    let res = data.json();
    return res
}
export const getRoadster = async() => {
    const url = 'https://api.spacexdata.com/v4/roadster';
    const options ={
        method: 'GET'
    };
    let data = await fetch(url, options)
    let res = data.json();
    return res;
}
export const getCrew = async() => {
    const url = 'https://api.spacexdata.com/v4/crew';
    const options = {
        method: 'GET'
    };
    let data = await fetch(url, options)
    let res =  data.json();
    return res
}
export const getHistory = async() => {
    const url = 'https://api.spacexdata.com/v4/history';
    const options = {
        method: 'GET'
    };
    let data = await fetch(url, options)
    let res = data.json();
    return res
}
export const getCapsules = async() => {
    const url = 'https://api.spacexdata.com/v4/capsules';
    const options = {
        method: 'GET'
    };
    let data = await fetch(url, options);
    let res = data.json();
    return res
}
export const getCompany = async() => {
    const url ='https://api.spacexdata.com/v4/company'
    const opciones = {
        method: 'GET'
    }
    let data = await fetch(url, opciones);
    let res = data.json();
    return res;
}

export const getCores = async() => {
    const url ='https://api.spacexdata.com/v4/cores'
    const opciones = {
        method: 'GET'
    }
    let data = await fetch(url, opciones);
    let res = data.json();
    return res;
}

export const getDragons = async() => {
    const url ='https://api.spacexdata.com/v4/dragons'
    const opciones = {
        method: 'GET'
    }
    let data = await fetch(url, opciones);
    let res = data.json();
    return res;
}
export const getLanspads = async() => {
    const url ='https://api.spacexdata.com/v4/landpads'
    const opciones = {
        method: 'GET'
    }
    let data = await fetch(url, opciones);
    let res = data.json();
    return res;
}

export const getLaunchpads = async() => {
    const url ='https://api.spacexdata.com/v4/launchpads'
    const opciones = {
        method: 'GET'
    }
    let data = await fetch(url, opciones);
    let res = data.json();
    return res;
}


export const getStarlink = async() => {
    const URL ='https://api.spacexdata.com/v4/starlink/query'
    const options = {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {},
            "options": {
                "limit": 300
            }
        })
    };
    const res = await fetch(URL, options);
    const docs = await res.json();
    return docs.docs;
}


export const getPayloads = async() => {
    const url ='https://api.spacexdata.com/v4/payloads'
    const opciones = {
        method: 'GET'
    }
    let data = await fetch(url, opciones);
    let res = data.json();
    return res;
}

export const getLaunches = async() => {
    const url ='https://api.spacexdata.com/v4/launches'
    const opciones = {
        method: 'GET'
    }
    let data = await fetch(url, opciones);
    let res = data.json();
    return res;
}