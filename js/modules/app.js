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