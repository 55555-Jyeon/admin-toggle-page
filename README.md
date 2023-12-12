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

   <br/>
1. UserList   <br/>
 1-1. 고유번호, 이름, 생년월일, 연락처, 마지막 로그인으로 이루어진 200명의 user 목록을 동적으로 생성 ✅    <br/>
 1-2. 연락처의 형태: 010-0000-0000 ✅   <br/>
 1-3. 생년월일의 형태: YYYY-MM-DD ✅   <br/>
   <br/>
2. memberList Table   <br/>
 2-1. 위 데이터를 통해 표 형태로 구독이 가능한 회원 목록 보이기 ✅   <br/>
 2-2. 데이터에는 마지막 로그인, 생년월일, 연락처, 이름, 고유번호가 모두 노출 ✅   <br/>
 2-3. 전화번호의 중간 자리는 모두 \*\*\*\* 로 표시되게 할 것 ✅   <br/>
   <br/>
3. pagination   <br/>
 3-1. default로는 한 페이지 당 20명씩, 페이지네이션은 5개 단위로 보여질 것 ✅   <br/>
 3-2. 선택된 페이지네이션이 focus 되는가✅   <br/>
 3-3. 뒤로가기 지원이 되는가 ✅   <br/>
   <br/>
<div align="center">
<p>한 페이지 당 20명씩, 페이지네이션은 5개 단위로 보여지도록 했습니다.</p>
<p>선택된 페이지는 focus 시 css를 적용해 이용자가 현재 어느 페이지에 있는지 쉽게 알 수 있도록 했고</p>
<img src="" />
<p>뒤로가기 클릭 시 이전에 방문했던 페이지의 데이터를 차례대로 보여줍니다. (영상의 압축과 변환 페이지가 열러 있어 뒤로가기에 딜레이가 좀 있습니다.)</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/8dc6eac7-22f1-46aa-85e5-e6186695c047"  />
</div>
   <br/>
4. filtering   <br/>
  4-1. 20명씩, 50명씩 보기 ✅   <br/>
  4-2. 이름 순, 생년월일 순, 로그인 시점 순으로 정렬하기 ✅   <br/>
  4-3. 2번 항목의 경우 오름차순, 내림차순으로 정렬하기 ✅   <br/>
  4-4. 뒤로가기 지원이 되는가 ✅   <br/>
   <br/>
<div align="center">
<p>20명씩, 50명씩 선택해 표를 볼 수 있는 필터링 기능</p>
<p>밑에 페이지네이션 배열도 보여지는 userList.length에 따라 길이가 달라집니다.</p>
<img src=""  />
</div>
   <br/>
<div align="center">
<p>이름 순, 생년월일 순, 로그인 시점 순으로 정렬되며 default 값은 회원번호 순으로 된 오름차순 정렬입니다.</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/f7c3d014-2daa-4133-96b5-a3bcccdd9752"  />
<p>내림차순으로 정렬도 정상적으로 기능합니다.</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/1fd04c99-062d-444a-bea6-1c487490b850"  />
</div>
   <br/>
<div align="center">
<p>뒤로가기 지원이 되도록 useSearchParams를 사용했습니다.</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/a7534699-0cdb-4dff-95d5-87574adaae3c"  />
</div>
   <br/>
5. toggle   <br/>
  5-1. 새로고침 시 데이터가 유지되는가 ✅   <br/>
  5-2. 뒤로가기 지원이 되는가 ❌   <br/>
  <br/>
<div align="center">  
<p>전체 페이지 레이아웃입니다.</p>
<p>입장버튼 클릭 시 member와 product를 관리하는 페이지로 접근할 수 있으며 toggle 버튼은 layout-outlet 방식으로 보여지도록 했습니다.</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/369e9c6c-a63d-4aa8-8a01-eb25f40b088c"  />
</div>
<div align="center">
<p>새로고침 시에도 토글 버튼이 default 값으로 돌아가지 않습니다.</p>
<p>이는 토글의 상태를 LocalStorage에 저장하는 것으로 해결했습니다.</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/71c0ba6d-80a4-422e-8d70-493f2a592d61"  />
</div>
   <br/>
<div align="center">
<h3>아직 구현되지 않은 부분</h3>
<p>새로고침 시 토글 버튼은 움직이지 않으나 선택된 tab의 경우 경로를 설정해주지 않아 default 값으로 돌아가는 문제가 있습니다.</p>
<p>토글 버튼의 경우 뒤로가기가 되지 않습니다.</p>
</div>
   <br/>
##### 나는 상태를 잘 관리하고 있는가? 반복적인 UI를 최소화하기 위해 노력하고있는가?

상태관리에 대해서....

##### 회고
