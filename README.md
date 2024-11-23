# 35-SOPKATHON-WEB-WEB4

35기 AND SOPT 솝커톤 웹 4팀, Oopsie! WEB repo 🫢

## 서비스 이름 🧑‍🔧

**Oopsie!**

## 주요 기능 ⚙️

실패를 나누고 공감하며, 유쾌한 경험으로 바꾸는 Oopsie!

- 내 실패 게시물
    - 자신의 실패와 실수 경험을 텍스트 형식으로 기록
    - 배경 선택을 통한 게시물 커스텀(꾸밈)을 통해 실패를 실패답지 않게 표현
    - 각각의 게시물에 사람들이 스티커를 붙여 공감과 위로의 뜻을 표현
- 타인 실패 게시물 탐색
    - 다른 사람들이 작성한 실패 게시물(타인의 실패 경험)을 확인할 수 있는 피드 제공
    - 익명성을 보장하여 자유롭게 자신의 실수와 실패를 공유
- 공감 스티커
    - 오히려 좋아, 너 재능있어, 한 잔해, 펠리컨적 사고 등 실패를 나무라지 않고 다른 관점으로 바라볼 수 있는 스티커로 서로의 실패에 공감과 위로의 뜻을 전달

## 팀원 및 역할 분담 👬

- 강민하
    - 마이페이지 퍼블리싱
    - 내 실패 목록 조회 API 연결
- 이윤지
    - 홈 페이지
    - 전체 실패 목록 조회 API 연결
- 임화랑
    - 글 등록 페이지
    - 실패 공감 순위 조회 API 연결, 글 작성 API 연결
- 배영경
    - 글 디테일 페이지
    - 실패 공감 이모지 등록/취소 API 연결

## 그라운드 룰 ✍️

1. 다른 파트와 소통할 때는 존경을 담아서 ! (선생님 등의 호칭 붙이기)
2. 둥글둥글한 말투
3. 모르는거 바로 물어보기
4. 힘들어도 웃기 😃
5. ⭐️ 즐기면서 행복하게 솝커톤하기 ⭐️

## 컨벤션과 브랜치 전략 🌎

### 브랜치 전략 🦿

main은 프로덕트 배포를 위한 브랜치에요.
모든 작업은 develop 에서 분기된 브랜치에서 진행돼요.

develop에서 분기된 브랜치는 `구현기능유형 / 이름 / 구현기능` 네이밍 규칙을 가져요. (camelCase 사용)

- ex) `feat/cardCommponent/hwarang`

### 커밋 컨벤션 🗣️

커밋 메시지는 커밋유형: <구현, 수정, 개발한 내용에 대한 커밋 메시지>
ex) `feat: Card 컴포넌트 제작`

```
| 커밋유형 | 의미 |
| --- | --- |
| `feat` | 새로운 기능 추가, css 및 UI 기능 포함 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 |
| `style` | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| `refactor` | 코드 리팩토링 |
| `chore` | 패키지 매니저 수정, 그 외 기타 수정 |
| `deploy` | 배포 관련 |
| `setting` | 개발 환경 세팅 |

```

### 브랜치 병합 🙋‍♂️

feature 브랜치에서 develop 브랜치로 merge할 때는 PR을 이용해요. 

- merge는 기본적으로 Squash and Merge 방법을 사용해요.

PR 탬플릿을 활용해 간단하게 구현한 기능들을 문서로 관리해요.

### 폴더구조 🗂️

```jsx
|-- 📁 node_modules
|-- 📁 public
    |-- 📁 svg
|-- 📁 src
    |-- 📁 asset
        |-- 📁 svgs
        |-- 📁 images
    |-- 📁 components
        |-- 📁 Button
            |-- Button.tsx
            |-- Button.style.ts
    |-- 📁 pages
   	    |-- 📁 HomePage
            |-- 📁components
            |-- 📁types
            |-- HomePage.tsx
            |-- HomePage.style.tsx
   |-- 📁 hooks
   |-- 📁 styles ( GlobalStyles , theme.ts )
   |-- 📁 utils ( 재사용이 높은 함수모음 폴더 )
       |-- 📁 constants
       |-- 📁 mocks
   |-- 📁 apis
   |-- 📁 type
   |-- 📁 routes
   |-- App.tsx
   |-- main.tsx

```

### 패키지 매니저 🐈

yarn (version 1.22.22)

## 웨비 팀원들의 사진(before) 🌊

![사진 2024  11  23  오후 9 04](https://github.com/user-attachments/assets/96c8887f-a7e8-455f-9de1-356e1132fdf4)
