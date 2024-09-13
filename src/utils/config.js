export const api = import.meta.env.VITE_API_URL;

export const requestConfig = (method, data, token = null, image = null) => {
    let config;
    if(image){
        config = {
            method: method,
            headers: {},
            body: data,
        };
    }else if(method === "DELETE" || data === null){
        config = {
            method: method,
            headers: {},
        };
    }else {
        config= {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };
    }
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}