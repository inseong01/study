# Proxy, VPN 차단 방법
The way to ban Proxy and VPN

악의적인 방법으로 IP를 우회한 클라이언트가 접속할 가능성 염려 


Proxy
---
컴퓨터와 인터넷 사이에 있는 중계 서버다.    

사용자의 요청을 `Proxy`가 대신 서버로 전달하고 서버의 응답을 `Proxy`를 거쳐 사용자에게 전달한다.  

VPN
---
가상 사설망으로 컴퓨터와 인터넷 간에 암호화된 보안 연결을 해주는 서비스다.

`VPN`은 `Proxy`과 마찬가지로 원격 서버를 통해 웹 트래픽을 라우팅하여 실제 `IP`를 숨긴다.

Proxy와 VPN 차이점
---

`VPN`은 보안 및 개인 정보 보호 계층이 추가되어 데이터를 암호화 하지만 `Proxy`는 그렇지 않다.

`Proxy`는 특정유형의 트래픽만(`HTTP`, `SOCKS`) 라우팅 하지만 `VPN`은 서버를 통해 모든 인터넷 트래픽을 라우팅한다.   
* `SOCKS` : 클라이언트와 서버 간의 네트워크 트래픽을 프록시 서버를 통해 중계

Proxy와 VPN 식별방법
---

`IP 분석 서비스`로 효과적으로 탐지할 수 있지만 일부 `Proxy 서비스`와 `VPN`이 `IP` 주소를 지속적으로 교체함으로써 완벽하지 않다. 

### Detection API 활용
`IPQualityScore` 무료 (5,000건)    
`vpnapi.io` 무료 (1,000건)    
`IPinfo.io` 무료 (50,000건 IP 식별만)


### HTTP Header 확인
```
GET /example-page HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
X-Forwarded-For: 123.45.67.89
Via: 1.1 proxy-server-name (Apache/2.4.41)
```
- **X-Forwarded-For**   
  HTTP 표준 헤더로 프록시나 로드 밸런서의 IP 주소만 기록되는 문제를 해결하기 위해 사용된다.   

  클라이언트의 원래 IP 주소를 확인할 수 있다.

- **Via**   
  프록시에 의해 추가된다. 메시지 전달을 추적하고 발신자의 프로토콜 기능을 식별한다.

  어떤 프록시 서버를 사용하고 있는지 알 수 있다.

## 결론
보안은 신경 쓸 게 많다. 그만큼 보안 API도 많았다.   
왜 위탁을 하는지 알겠다. 온전히 개발에 집중할 수 있다.

## 참고자료
[Proxy/VPN Check: Am I Using a Proxy or VPN? - NoobLinux](https://nooblinux.com/proxy-vpn-check-am-i-using-a-proxy-or-vpn/)    
[Proxy Detection API Docs | VPN Detection API - IPQualityScore](https://www.ipqualityscore.com/documentation/proxy-detection-api/overview)    
[X-Forwarded-For - mdn](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/X-Forwarded-For)    
[Via - mdn](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Via)    