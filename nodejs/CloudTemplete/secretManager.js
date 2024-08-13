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

// import cryptoJs from "./node_modules/crypto-js";
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
import ACCESS_KEY_ID from "./KEY/ACCESS_KEY_ID.js";
import SECRET_KEY from "./KEY/SECRET_KEY.js";

const TIMESTAMP = Date.now().toString();
const METHOD = 'GET'; // 요청 메서드 (GET, POST 등)

// 시그니처 생성 함수
function makeSignature(method, time, access_Key, secret_Key) {
  const space = " ";				// one space
  const newLine = "\n";				// new line
  const url = `/api/v1/secrets?pageNo=0`;	// url (include query string)
  const timestamp = `${time}`;			// current timestamp (epoch)
  const accessKey = `${access_Key}`;			// access key id (from portal or Sub Account)
  const secretKey = `${secret_Key}`;			// secret key (from portal or Sub Account)

  // secretKey 문자열
  let hmac = cryptoJs.algo.HMAC.create(cryptoJs.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timestamp);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();

  return hash.toString(cryptoJs.enc.Base64);
}

// 시그니처 생성
const signature = makeSignature(METHOD, TIMESTAMP, ACCESS_KEY_ID, SECRET_KEY);
console.log('signature', signature);

const secretManagerURL = 'https://secretmanager.apigw.ntruss.com/api/v1/secrets';

const headers = {
  'x-ncp-apigw-timestamp': TIMESTAMP,
  'x-ncp-iam-access-key': ACCESS_KEY_ID,
  'x-ncp-apigw-signature-v2': signature,
}

fetch(secretManagerURL, {
  method: METHOD,
  headers: headers
})
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    console.log('response', res)
  })
  .catch(err => console.error('err', err))