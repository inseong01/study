import CryptoJS from "crypto-js/crypto-js.js"; // ERR_UNSUPPORTED_DIR_IMPORT, /crypto-js 이어서 /fileName 추가
import ACCESS_KEY_ID from "./KEY/ACCESS_KEY_ID.js";
import SECRET_KEY from "./KEY/SECRET_KEY.js";
import APIGATEWAY_PRODUCT_ID from './KEY/APIGATEWAY_PRODUCT_ID.js';

const TIME_STAMP = Date.now().toString();
const METHOD = 'GET'; // 요청 메서드 (GET, POST 등)

// 시그니처 생성 함수
function makeSignature(time_stamp, access_Key, secret_Key, productId) {
  const space = " ";				// one space
  const newLine = "\n";				// new line
  const method = "GET";				// method
  const url = `/api/v1/products/${productId}/apis`;	// url (include query string)
  const timestamp = `${time_stamp}`;			// current timestamp (epoch)
  const accessKey = `${access_Key}`;			// access key id (from portal or Sub Account)
  const secretKey = `${secret_Key}`;			// secret key (from portal or Sub Account)

  const message = method + space + url + newLine + timestamp + newLine + accessKey;

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(message);

  const hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
}

const SIGNATURE = makeSignature(TIME_STAMP, ACCESS_KEY_ID, SECRET_KEY, APIGATEWAY_PRODUCT_ID);
const secretManagerURL = `https://apigateway.apigw.ntruss.com/api/v1/products/${APIGATEWAY_PRODUCT_ID}/apis`;

const headers = {
  'x-ncp-apigw-timestamp': TIME_STAMP,
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
    console.log('data1', data);
    return data;
  } catch (e) {
    console.error('secretManager', e);
  }
}
secretManager();

// export default secretManager;

