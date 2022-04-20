const axios = require('axios');
const cryptoJS = require('crypto-js');


const bUrl = ' https://fapi.binance.com';
const endPoint = '/fapi/v1/klines';
const params = 'symbol=DOGEUSDT';
const url = bUrl + endPoint + '?' + params;

const getLastBar = async () => {
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch (e) {
        console.log(e);
    }
}

module.exports = getLastBar;