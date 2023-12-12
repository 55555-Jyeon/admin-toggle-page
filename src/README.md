## [ Admin Toggle Page ]

##### 2023.12.02 ~ 2023.12.07 + alpha

| 날짜          | 진행 내용                                                                     | 구현 여부                                         |
| ------------- | ----------------------------------------------------------------------------- | ------------------------------------------------- |
| 12/02         | 유저 목록 동적으로 생성하기                                                   | ✅                                                |
| 12/03         | 회원 목록 테이블 만들기                                                       | ✅                                                |
| 12/04         | 페이지 네이션 만들기                                                          | ✅                                                |
| 12/05         | 필터링 옵션 만들기                                                            | ✅진행 중 props drilling 현상 발견                |
| 12/06         | 토글 슬라이드가 가능한 사이드 메뉴 만들기 && 페이지네이션 수정                | ✅                                                |
| 12/07         | 페이지네이션 수정하자 필터링 기능 x, 원상복구 후 계속 고민                    | ❌                                                |
| 12/08         | -                                                                             | -                                                 |
| 12/09         | 코드 리뷰 및 다른 페어 코드 이해하기                                          |                                                   |
| 12/10 - 12/11 | 처음부터 꼬여 있던 터라 patch 대신 처음부터 다시 구현 시작, 뒤로가기에서 막힘 | -                                                 |
| 12/12         | URLSearchParams 부분 공부, 뒤로가기 관련 고민                                 | https://velog.io/@55555-jyeon/URL-URLSearchParams |

##### 과제 내용

<p align="center">
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/d7e1af4c-65f8-4bfb-b621-5455c7915d2e" />
</p>

##### 각 항목별 구현 페이지

1. UserList
   1-1. 고유번호, 이름, 생년월일, 연락처, 마지막 로그인으로 이루어진 200명의 user 목록을 동적으로 생성 ✅
   1-2. 연락처의 형태: 010-0000-0000 ✅
   1-3. 생년월일의 형태: YYYY-MM-DD ✅

2. memberList Table
   2-1. 위 데이터를 통해 표 형태로 구독이 가능한 회원 목록 보이기 ✅
   2-2. 데이터에는 마지막 로그인, 생년월일, 연락처, 이름, 고유번호가 모두 노출 ✅
   2-3. 전화번호의 중간 자리는 모두 \*\*\*\* 로 표시되게 할 것 ✅

3. pagination
   3-1. default로는 한 페이지 당 20명씩, 페이지네이션은 5개 단위로 보여질 것 ✅
   3-2. 선택된 페이지네이션이 focus 되는가✅
   3-3. 뒤로가기 지원이 되는가 ✅

4. filtering
   4-1. 20명씩, 50명씩 보기 ✅
   4-2. 이름 순, 생년월일 순, 로그인 시점 순으로 정렬하기 ✅
   4-3. 2번 항목의 경우 오름차순, 내림차순으로 정렬하기 ✅
   4-4. 뒤로가기 지원이 되는가 ✅

5. toggle
   5-1. 새로고침 시 데이터가 유지되는가 ✅
   5-2. 뒤로가기 지원이 되는가 ❌

##### 나는 상태를 잘 관리하고 있는가? 반복적인 UI를 최소화하기 위해 노력하고있는가?

상태관리에 대해서....

##### 회고