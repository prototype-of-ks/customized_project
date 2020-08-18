import RSA from './jsencrypt';
const eeui = app.requireModule('eeui');
const picture = app.requireModule('eeui/picture');


const TEST_URL = 'https://testwl.jiahua.com/scm';
let CLIENT_ID = null;
/**
 * 
 * @param {公钥} publicKey 
 * @param {加密数据} data 
 */
export const encryption = (publicKey, data) => {
    let rsa = new RSA.RSAKey();
    rsa.setPublic(publicKey.modulus, publicKey.exponent);
    return rsa.encrypt_b64(JSON.stringify(data));
}

/**
 * 
 * @param {私钥} privateKey 
 * @param {解密数据} data 
 */
// export const decryption = (privateKey, data) => {
//     let encrypt = new JsEncrypt();
//     encrypt.setPrivateKey(privateKey);
//     return encrypt.decrypt(data);
// }

// let publicKey = {
//     exponent: "010001",
//     modulus: "00bcfa1e5800ce69cf076d7d1ed7f82e8abda8c6cc4a768aceed4e72f8de1748f3e61e922716943e2c540b33e026af505e7ad55e5ac8d8c65549d6fbedb9e0383e61ef0ea25da2f5c91694b641835bd0846b9e629419d78964bf140ccbd6ac38f3c3df8fe5b2c0ccc1052c666ff52f119f5df16e7acd2efc4b61e827e262c6603f"
// }

// let loginInfo = {
//     user: 'ksheen',
//     password: 'ks1234567'
// }

// console.log(encryption(publicKey, loginInfo));


export const openPage = url => {
    eeui.openPage({
        url: url,
        pageType: 'app',
        animated: true,
        animatedType: 'push'
    })
}

export const openScaner = (params, callback) => {
    eeui.openScaner(params, callback);
}

export const pic = (params, callback) => {
    picture.create(Object.assign({
        type: 'camera'
    }, params), callback);
}

export const ajax = (configs) => {
    eeui.ajax(Object.assign({
        timeout: 5000
    }, configs), res => {
        if (res.status == 'success') {
            console.log(configs.success);
            configs.success(res);
        } else if (res.status == 'error') {
            configs.error(res);
        }
    })
}

const obj = {
    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    data: {
        isWeb: true,
        isYES2: true,
        mode: 1,
        service: "GetPublicKey"
    },
    dataType: "json",
    headers: {appKey: "Global"},
    timeout: 0,
    type: "post",
    url: "https://testwl.jiahua.com/scm/servlet/GetPublicKey/do/global",
}

const SVR = {
    getNormalizedUri(params, url, form) {
        let _formKey, _projectKey = 'global';
        // if(form){
        //     _formKey = form.getFormKey();
        //     _projectKey = form.getProjectKey();
        // }

        // if(form){
        //     if(!form.getAppEnv()){
        //         console.log("...................appEnv is null..............");
        //     }
        // }

        let service  = params['service'];
        let cmd = params['cmd'] || 'do';
        let projectKey = _projectKey || 'global';
        let key = params['itemKey'] || params['dataObjectKey'] || params['formKey'] || _formKey || '';

        // if(!url){
        //     url = Svr.SvrMgr.ServletURL;
        // }

        if(service){
            url = url + '/' + service + '/' + cmd + '/' + projectKey;
            url = key ? url + '/' + key : url; 
            return url;      
        }
        console.log(url);
        return url;
    },
    transData(data) {
        if (data == null) {
            return data;
        }
        data.mode = 1;
        data.isYES2 = true;
        // let json = JSON.stringify(data);
        //传送数据 长度 大于 20000 开启压缩   20000长度的数据传输在30K 左右
        return data;
    },
    getPublicKey(params = { isWeb: true, service: 'GetPublicKey'}) {
        let postData = this.transData(params),
            url = this.getNormalizedUri(params, TEST_URL + '/servlet');

        console.log(url);
        return new Promise((resolve, reject) => {
            ajax({
                url: url,
                method: 'POST',
                data: postData,
                dataType: 'json',
                timeout: 5000,
                success (res) {
                    resolve(res);
                },
                error (res) {
                    console.error(res);
                    reject(res);
                }
            })
        })
    },
    doLogin(username, password, sessionPara = {}, validateCode, tmpClientId) {
        this.getPublicKey().then(publicKey => {
            console.log(publicKey);
            let loginInfo = {};
            loginInfo.user = username;
            loginInfo.password = password;
            loginInfo.validatecode = validateCode;
            let data = encryption(publicKey, loginInfo);

            let opts = {
                url: TEST_URL + '/servlet',
                logininfo: data,
                tmpclientid: tmpClientId,
                paras: JSON.stringify(sessionPara),
                cmd: 'Login',
                service: 'Authenticate',
                timezone: 'Asia/Shanghai'
            };
            
            this.getData(opts.url, opts);
        })
    },
    getData (url, params, sucCallback, errorCallback) {
        params.mode = 1;
        let returnObj = null,
            postData = this.transData(params);
        url = this.getNormalizedUri(params, url);
        // return
        return ajax({
            url: url,
            dataType: 'json',
            data: postData,
            // headers: { appKey: 'Global' },
            method: 'POST',
            success (res) {
                console.log(res.result.data.clietId);
                return res;
            },
            error (res) {
                console.log(res);
            }
        })
    }
}

SVR.doLogin('fy', '', {}, undefined, CLIENT_ID);

export default {
    openPage,
    openScaner,
    pic,
    encryption,

}