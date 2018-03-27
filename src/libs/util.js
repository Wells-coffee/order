import axios from 'axios';
import env from '../config/env';
import sha1 from '../libs/sha1';

let util = {

};

util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'https://d.apicloud.com/mcm/api/' :
    env === 'production' ?
    'https://d.apicloud.com/mcm/api/' :
    'https://debug.url.com';

let apiObj = {
    key: 'A774457C-5281-7E98-E3A9-F2258ABC3E44',
    appID: 'A6982588310132',
    appKey: function(){
        let now = + new Date();
        return sha1.hex_sha1(this.appID+"UZ"+this.key+"UZ"+now)+"."+now;
    },
}

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {
        "X-APICloud-AppId": apiObj.appID,
        "X-APICloud-AppKey": apiObj.appKey()
    }
});

export default util;
