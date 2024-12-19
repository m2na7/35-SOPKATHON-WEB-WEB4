# OOPSIE !

**🏆 35기 AND SOPT 솝커톤 웹 4팀, OOPSIE! 웹부분 대상 수상 🏆** 
</br>
</br>

## 주요 기능 ⚙️

- 내 실패 게시물
    - 자신의 실패와 실수 경험을 텍스트 형식으로 기록
    - 배경 선택을 통한 게시물 커스텀(꾸밈)을 통해 실패를 실패답지 않게 표현
    - 각각의 게시물에 사람들이 스티커를 붙여 공감과 위로의 뜻을 표현
- 타인 실패 게시물 탐색
    - 다른 사람들이 작성한 실패 게시물(타인의 실패 경험)을 확인할 수 있는 피드 제공
    - 익명성을 보장하여 자유롭게 자신의 실수와 실패를 공유
- 공감 스티커 
    - 오히려 좋아, 너 재능있어, 한 잔해, 펠리컨적 사고 등 실패를 나무라지 않고 다른 관점으로 바라볼 수 있는 스티커로 서로의 실패에 공감과 위로의 뜻을 전달

 ## 세부 설명 ✍️

 실패를 나누고 공감하며, 유쾌한 경험으로 바꾸는 OOPSIE!

> OOPSIE와 함께라면,</br>
> 모든 실수와 실패는 웃으며 넘길 수 있는 소중한 경험이 됩니다. </br>
> 함께 실패를 나누고 공감하며, 유쾌한 경험으로 바꿔보세요 !


![1](https://github.com/user-attachments/assets/cb6904c0-8647-4dd3-a3bb-7333e36ac6e7)
![2](https://github.com/user-attachments/assets/865aa664-bc23-4a7b-9bfa-0876dd68d62c)
![3](https://github.com/user-attachments/assets/f2830727-9cf2-4b24-8402-542a3436c5e9)
![4](https://github.com/user-attachments/assets/601e3956-c7a8-4d7a-ba60-d357997eff79)
![5](https://github.com/user-attachments/assets/3717d3b3-37b6-4c84-9d0e-1ac4d8cfcbc0)
![6](https://github.com/user-attachments/assets/0f65258b-8db3-401d-953d-3658602ce6d4)
![7](https://github.com/user-attachments/assets/14e4cbc4-714b-434e-8c93-eaedf49211b6)
![8](https://github.com/user-attachments/assets/6be16d1a-9513-4a7d-a0bb-de3093b34512)
![9](https://github.com/user-attachments/assets/25cacf5b-f0b0-4044-87fd-4c2ad42ab10e)
![10](https://github.com/user-attachments/assets/5bb7c007-cb5b-40ee-8aa4-f4d26f94e385)


## 팀원 및 역할 분담 👬

| <img src="https://avatars.githubusercontent.com/u/118591632?s=400&u=86faba07e97d39ff19e7fab0fc90533d72d6a6c8&v=4" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/90778858?v=4" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/thisishwarang?v=4" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/bykbyk0401?v=4" width="100" height="100"> |
|:---:|:---:|:---:|:---:|
| [강민하](https://github.com/m2na7) | [이윤지](https://github.com/Leeyoonji23) | [임화랑](https://github.com/thisishwarang) | [배영경](https://github.com/bykbyk0401) |

<br>

- 강민하 (리드)
    - 게시글 상세보기 뷰 담당
    - 실패 공감 이모지 등록 API 연결 (POST)
    - 실패 공감 이모지 취소 API 연결 (DELETE)
- 이윤지
    - 메인 페이지 뷰 담당
    - 전체 실패 목록 조회 API 연결 (GET)
- 임화랑
    - 글 등록 페이지 뷰 담당
    - 메인페이지 뷰 관련 컴포넌트 담당
    - 실패글 등록 API 연결 (POST)
- 배영경
    - 마이페이지 뷰 담당
    - 전체 실패 목록 조회 API 연결 (GET)
    - 실패 공감 순위 조회 API 연결 (GET)
    - 상세 실패글 조회 API 연결 (GET)
  

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

<details>
<summary><h2>OOPSIE ! 사진 📸</h2></summary>
<div markdown="1">


## 웨비 팀원들의 사진(before) 🌊

![사진 2024  11  23  오후 9 04](https://github.com/user-attachments/assets/96c8887f-a7e8-455f-9de1-356e1132fdf4)

## 웨비 팀원들의 사진(after) 🌊🌊

![사진 2024  11  24  오전 8 18](https://github.com/user-attachments/assets/3cb43409-9c0a-4b96-9ab9-2a5085482f21)

</div>
</details>

