# IP 블랙리스트 관리 : DB 비용 최소화
IP Blacklist Management: Minimizing Database Costs

어느 방식으로 서버에 `IP`를 기록할지,   
어느 정도의 데이터 저장용량이 필요할지 고민    

## 데이터 파일 CRUD 체계
**CREATE**      
: `IP 목록` 파일 생성 (`Table` 또는 `Object`)

**READ**    
: 관리자 권한만 확인 가능    

**UPDATE**    
: 사용자가 접속하면 `IP 목록`에 `접속시간/IP` 추가       
비정상 `API` 사용 시 `사용자 IP` 블랙리스트로 수정 - 영구 저장

**DELETE**    
: 일정량 넘어가면 화이트리스트 `IP 목록` 오래된 순으로 삭제 - 서버 용량 확보

## 데이터 파일 관리 언어
### SQL
- 장점    
: 대용량 데이터 처리 빠름, 코딩 실력 불필요     

- 단점    
: 복잡한 인터페이스, SQL 서버 설치 및 유지보수

### JSON
- 장점    
: 데이터 쉽게 추가 가능, 서버 불필요 

- 단점    
: 에러 핸들링, 동시성 문제

### 언어별 저장 용량 비교
- 조건
  ```javascript
  // 가장 긴 IPv6 주소와 시간을 담은 데이터 1억 개 용량 (근사값)
  {
    "TIME": "1723801714210"
    "IP": "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
  }
  ```
- JSON    
  ```
  데이터 저장 형식 - 문자열
  : 61bytes/ip

  (61 * 100,000,000) / (1024**3) = 5.68GB
  ```

- SQL
  ```
  데이터 저장 형식 다양 (TIME BIGINT, IP 바이너리 변환)
  : 24bytes/ip   

  (24 * 100,000,000) / (1024**3) = 2.23GB 
  ```   

## 개설 서버 비교
*24.8.16. 기준*

1. 네이버 클라우드    
    - 1년 무료 
    - 메모리 1GB 
    - 스토리지 50GB 

2. 오라클 클라우드    
    - 평생 무료 
    - AMD 기반 CPU 메모리 1GB 
    - 블록 볼륨 스토리지 200GB (오브젝트 스토리지 10GB)   
    *일주일 동안 CPU 사용률 20% 미만일 시 서버 회수*

## 결론
날씨 웹에서 위경도 값을 찾을 때 이른 반환을 해도 `json`은 오래 걸렸다. `SQL`은 얼마나 빠를지 궁금하다. 그리고 형 변환 저장이 변환이 아주 마음에 든다. 획기적으로 용량을 줄일 수 있다는 게 아주 좋다.   
서버는 안정적인 게 좋으니 평생 무료인 오라클을 하는 게 가장 나을 듯 하다. 한국 문서가 아쉽긴 해도 평생 무료는 넘길 수 없었다. 데이터베이스 용량은 충분하다. 메모리는 잘 모르겠다. 감이 안 온다.   

## 참고자료
[Advantages and Disadvantages of SQL - geeksforgeeks](https://www.geeksforgeeks.org/advantages-and-disadvantages-of-sql/)   
[JSON – Advantages and Disadvantages - ezeelive](https://ezeelive.com/json-advantages-disadvantages/)   
[Naver Cloud Server - NAVER Cloud Platform](https://www.ncloud.com/product/compute/server#pricing)   
[Oracle Cloud Free Tier - Oracle](https://www.oracle.com/kr/cloud/free/#always-free)   