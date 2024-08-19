# 서버 생성 과정 : NAVER CLOUD PLATFORM
Create Server : NAVER CLOUD PLATFORM
   
서버를 생성하려다 오라클의 단점을 찾았다. 일주일 서버 사용률이 20% 미만이면 서버를 회수한다는 것이다. CPU, 네트워크 사용률이 20% 이상이어야 하는데 서버를 운영해보지 않은 나로서는 서버가 유지가 될지 의문이었다. 지속적인 서비스 제공 사이트가 아니고서야 조건을 만족시킬 자신이 없었다. 일단 무료로 받은 네이버 클라우드 서버를 사용해야 됐다.   

*2024.3 이후 네이버 클라우드 플랫폼 가입자는 Classic 환경을 사용하지 못한다.*

## 1. VPC 서버 접속 환경
네이버 클라우드 플랫폼 `VPC` 서버 환경은 `Public` 또는 `Private` 서브넷이 필요하다.   
`Classic` 환경과 다르게 포트 포워딩을 통한 접속이 불가능하다.    

공인 IP를 생성하면 빠르게 진행할 수 있다.

## 2. 공인IP 신청
서버에 공인IP를 할당해주면 된다.

## 3. ACG 설정
`Access Control Group `    
인바운드와 아웃바운드 규칙을 추가한다.    

```
인바운드(Inbound): 외부에서 내부 네트워크로 들어오는 트래픽을 제어하는 규칙.    
예를 들어, 웹 서버로 들어오는 HTTP 요청을 허용하거나 차단할 수 있다.    

아웃바운드(Outbound): 내부 네트워크에서 외부로 나가는 트래픽을 제어하는 규칙.   
예를 들어, 내부 서버에서 외부로 나가는 데이터 전송을 허용하거나 차단할 수 있다.
```

```
Inbound 규칙
tcp | 0.0.0.0/0 | 포트번호 | (메모)
tcp | 0.0.0.0/0 | 22 | (메모)
tcp | 0.0.0.0/0 | 3389 | (메모)

Outbound 규칙
tcp | 0.0.0.0/0 | 1-65535 | (메모)
udp | 0.0.0.0/0 | 1-65535 | (메모)
```

접근을 허용할 포트번호를 Inbound에 추가한다.     

*`0.0.0.0/0`: 접근 소스 전체범위, `myIP`로 특정 IP만 접근 설정 가능*     
*`1-65535`: 포트 전체범위* 

## 4. 서버 접속
`공인 IP 설정`, `ACG 설정`, `관리자 비밀번호`를 확인했다면 서버에 접속할 수 있다.

Micro 서버는 Linux만 지원함으로 네이버 클라우드 탬플릿에서 공유하고 있는 `PuTTY`를 다운받으면 된다.

  1. `Host Name`: 공인IP, `Port`: ACG를 허용한 포트번호를 입력.   

  2. 검은 창이 나타나면     
  `id: root` 입력   
  `password: 관리자 비밀번호` 입력    
  
      *비밀번호 복사하고 우클릭(붙여넣기) 후 엔터, 보안상 커서 움직이지 않음*

## 5. 서버 띄우기
4번까지는 수월했지만 여기서 많은 시간 소비했다.   

`PuTTY`에 로그인만 하면 서버가 생성되는 줄 알았다. `VS`에서 `express` 서버를 가동하고 `공인IP:포트번호`로 접속했다. 결과는 접속거부. 지금은 알지만 저때까지만 해도 `PuTTY`로 서버를 띄우는 건지 몰랐다.   

`PuTTY`로 `Nodejs`를 실행할 방법을 알아봤다. 네이버 공식문서가 있었다. 아니나 다를까 `VPC`가 아닌 `Classic` 관련 문서였다. `Nodejs` 설치 방법을 따라 해봤지만 되지 않았다. 반면에 `Express` 모듈 활용 예제는 가능했다. 먼저 띄울 파일을 생성했고 `Nodejs`를 설치할 방법을 찾아봤다.    

```bash
# fnm 설치 (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash

# fnm 실행
source ~/.bashrc

# Node.js 다운로드/설치
fnm use --install-if-missing 20

# 노드 버전 확인
node -v # should print `v20.16.0`

# npm 버전 확인
npm -v # should print `10.8.1`
```

이후 `PuTTY`에서 `node`와 `npm`을 사용할 수 있었다. `VS`를 사용하는 것처럼 패키지 설치하고 `node`로 실행했다. `PuTTY`에 로그가 출력됐다. 다시 `공인IP:포트번호`로 진입했다.     
```
Hello World!
```    
성공이다 😭

## 느낀점
`ACG`가 뭔지, `인바운드/아웃바운드`가 뭔지 생소했다. `micro` 서버가 3세대로 바뀌어서 참고할 블로그도 없었다. 가장 최신 24년도 1월 글을 봤는데 그것도 3세대로 바뀌기 전이었다. 오직 공식문서로만 해결했다. 대단하다. [3세대 서버 생성 방법](https://inseong1204.tistory.com/111)을 보면 이제 헤매지 않겠지. 얼른 VPC 환경에서 서버 띄우는 방법도 블로그에 올려야겠다. 

## 참고자료
[VPC 서버 접속 환경 구성 - NCP](https://guide.ncloud-docs.com/docs/server-ts-access-architecture-vpc)   
[공인 IP 신청 - NCP](https://guide.ncloud-docs.com/docs/server-publicip-vpc#%EA%B3%B5%EC%9D%B8IP%EC%8B%A0%EC%B2%AD)   
[ACG 설정 - NCP](https://guide.ncloud-docs.com/docs/server-acg-vpc#acg-%EC%A0%95%EB%B3%B4-%ED%99%95%EC%9D%B8)   
[Server 접속 - NCP](https://guide.ncloud-docs.com/docs/server-access-vpc)   
[Node.js : Classic - NCP](https://guide-gov.ncloud-docs.com/docs/nodejs-nodejsconsole)   
[Download Node.js® : Node.js](https://nodejs.org/en/download/package-manager)   