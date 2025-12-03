# Spring Boot + React 개발 템플릿

스프링부트 백엔드와 리액트 프론트엔드로 구성된 기본 프로젝트입니다. 데이터베이스는 MariaDB를 사용하며 사용자, 메뉴(권한), 로그인, 게시판 관리에 필요한 기본 REST 엔드포인트와 화면 샘플을 제공합니다.

## 구성
- `backend/`: Spring Boot 3.x (Java 17), Maven 기반
  - 엔티티/컨트롤러: 사용자, 메뉴, 게시판, 로그인
  - MariaDB 연동 설정 (`application.yml`)
- `frontend/`: Vite + React 18
  - 관리 콘솔 샘플 화면 (로그인, 사용자/메뉴/게시판 패널)

## 실행 방법
### 백엔드
```bash
cd backend
./mvnw spring-boot:run   # 로컬 Maven Wrapper를 추가하려면 mvn -N wrapper 실행 후 사용
```
`src/main/resources/application.yml`에서 MariaDB 접속 정보(`url`, `username`, `password`)를 맞춰주세요.

### 프론트엔드
```bash
cd frontend
npm install
npm run dev
```
기본 개발 서버 포트는 `5173`입니다.

## REST 엔드포인트 요약
- 사용자: `GET/POST/PUT/DELETE /api/users`
- 메뉴(권한 포함): `GET/POST/PUT/DELETE /api/menus`
- 로그인: `POST /api/auth/login`
- 게시판: `GET/POST/PUT/DELETE /api/board-posts`
