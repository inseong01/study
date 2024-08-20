/*
  ** 네이버 클라우드 콘솔 사용방법 **
  https://api.ncloud-docs.com/docs/common-ncpapi
  
  Header
    x-ncp-apigw-timestamp:{Timestamp}
    x-ncp-iam-access-key:{Sub Account Access Key}
    x-ncp-apigw-signature-v2:{API Gateway Signature}
    Content-Type:application/json
  Body
    fieldName: {Value}
  URL
    https://secretmanager.apigw.ntruss.com/api/v1/{api}
*/

// Secret Manager
// https://api.ncloud-docs.com/docs/secretmanager-getsecretlist

import CryptoJS from "./node_modules/crypto-js/crypto-js.js"; // ERR_UNSUPPORTED_DIR_IMPORT, /crypto-js 이어서 /fileName 추가
import ACCESS_KEY_ID from "./KEY/ACCESS_KEY_ID.js";
import SECRET_KEY from "./KEY/SECRET_KEY.js";
import SECRET_MANAGER_ID from './KEY/SECRET_MANAGER_ID.js';

const TIMESTAMP = Date.now().toString();
const METHOD = 'GET'; // 요청 메서드 (GET, POST 등)

// 시그니처 생성 함수
function makeSignature(time_stamp, access_Key, secret_Key, secretId) {
  const space = " ";				// one space
  const newLine = "\n";				// new line
  const method = "GET";				// method
  const url = `/api/v1/secrets/${secretId}/values`;	// url (include query string)
  const timestamp = `${time_stamp}`;			// current timestamp (epoch)
  const accessKey = `${access_Key}`;			// access key id (from portal or Sub Account)
  const secretKey = `${secret_Key}`;			// secret key (from portal or Sub Account)

  const message = method + space + url + newLine + timestamp + newLine + accessKey;

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(message);

  const hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
}

const SIGNATURE = makeSignature(TIMESTAMP, ACCESS_KEY_ID, SECRET_KEY, SECRET_MANAGER_ID);
const secretManagerURL = `https://secretmanager.apigw.ntruss.com/api/v1/secrets/${SECRET_MANAGER_ID}/values`;

const headers = {
  'x-ncp-apigw-timestamp': TIMESTAMP,
  'x-ncp-iam-access-key': ACCESS_KEY_ID,
  'x-ncp-apigw-signature-v2': SIGNATURE,
  'Content-Type': 'application/json'
}

async function secretManager() {
  try {
    const res = await fetch(secretManagerURL, {
      method: METHOD,
      headers: headers
    });
    const data = await res.json();
    // console.log('data1', data);
    return data;
  } catch (e) {
    console.error('secretManager', e);
  }
}
// secretManager();

export default secretManager;

