import fetch, { RequestInit, Response } from 'node-fetch';
import axios, { AxiosRequestConfig } from 'axios';

function request(url: string, requestData: RequestInit = {}) {
        var resp = undefined;
        try {
            fetch(url, requestData)
            .then(data => {resp = data;});
        }catch(exc) {
            throw exc;
        }
        return resp;
}
function axiosGet(url: string, requestData: AxiosRequestConfig = {}) {
    var resp = undefined;
    try {
        axios.get(url, requestData)
        .then(data => {resp = data;});
    }catch(exc) {
        throw exc;
    }
    return resp;
}
function axiosPost(url: string, requestData: AxiosRequestConfig = {}) {
    var resp = undefined;
    try {
        axios.post(url, requestData)
        .then(data => {resp = data;});
    }catch(exc) {
        throw exc;
    }
    return resp;
}

export default {
    axios,
    fetch,
    request,
    // requestData
};