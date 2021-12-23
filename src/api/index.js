import axiosRoot from 'axios';
import config from '../config.json';

export const axios = () =>
{   
    const token = localStorage.getItem(config.token_key);

    const axiosWithToken = axiosNoAuth();

    // TODO remove duplicate code
    function parseJwt(token)
    {
        if(!token) return {};
        const base64Url = token.split('.')[1];
        const payload = Buffer.from(base64Url, 'base64');
        const jsonPayload = payload.toString('ascii');
        return JSON.parse(jsonPayload);
    }

    function parseExp(exp)
    {
        if(!exp) return null;
        if(typeof exp !== 'number') exp = Number(exp);
        if(isNaN(exp)) return null;
        return new Date(exp * 1000);
    }

    const {exp} = parseJwt(token);
    const expiry = parseExp(exp);
    const stillValid = expiry >= new Date();

    if(!stillValid)
    {
        window.location.reload(false);
    }

    return axiosWithToken;
};

export const axiosNoAuth = () =>
{
    const axiosWithToken = axiosRoot.create({
        baseURL: process.env.REACT_APP_BACKEND_BASE_URL || config.base_url
        , headers: {
            Authorization: `Bearer ${localStorage.getItem(config.token_key)}`,
        }
    })

    return axiosWithToken;
};

// export const setAuthToken = (token) =>
// {
//     if(token)
//     {
//         axios().defaults.headers['Authorization'] = `Bearer ${token}`;
//     } else
//     {
//         delete axios().defaults.headers['Authorization'];
//     }
// };