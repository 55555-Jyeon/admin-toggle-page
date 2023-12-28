// 토글 상태를 세션 스토리지에 저장하는 함수
const saveToggleState = (toggleState) => {
  sessionStorage.setItem("toggleState", toggleState);
};

// 세션 스토리지에서 토글 상태를 가져오는 함수
const getToggleState = () => {
  return sessionStorage.getItem("toggleState");
};

// 필터 상태를 세션 스토리지에 저장하는 함수
const saveFilterState = (filterState) => {
  sessionStorage.setItem("filterState", filterState);
};

// 세션 스토리지에서 필터 상태를 가져오는 함수
const getFilterState = () => {
  return sessionStorage.getItem("filterState");
};

// 브라우저 뒤로가기 이벤트를 처리하는 함수
window.addEventListener("popstate", function (event) {
  // 토글 상태를 세션 스토리지에서 가져와서 적용
  let toggleState = getToggleState();
  if (toggleState) {
    // 토글 상태를 적용하는 코드를 작성하세요.
  }

  // 필터 상태를 세션 스토리지에서 가져와서 적용
  let filterState = getFilterState();
  if (filterState) {
    // 필터 상태를 적용하는 코드를 작성하세요.
  }
});
