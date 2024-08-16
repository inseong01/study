# Web
설계, 정리, 기록 등등

## 서버 구축
```
✅ 1. 서버리스 API 요청주소는 어디까지 설정 가능한지
    : 서버로 API 요청을 보내면 CORS로 접근 가능한 URI 지정 가능

✅ 2. 중계서버, 일반서버 중 어떤 서버를 개설할지 
    : 데이터베이스 서버로 개설   

✅ 3. IP 주소 기록을 위해 `DB`가 필요한지      
    : 방화벽 차단보다 DB로 처리하는 편이 수월
 
🔲 4. 프록시, VPN으로 접근하면 어떻게 차단할지
```

서버 구축 기록
---

[1. 배포할 때 API key 숨기는 방법](./md/API_Key_Hide.md)    
[2. 내게 필요한 서버 구조 : 네트워크 구조](./md/clientServerArchitecture.md)    
[3. IP 블랙리스트 관리 : DB 비용 최소화](./md/IPBlacklistManagement.md)

