import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../styles/common.style";
import { useSearchParams } from "react-router-dom";

const Filter = ({ setSortedList, userList }) => {
  // 뒤로가기: useSearchParams & useEffect
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page") || 1;
  const perPage = searchParams.get("per-page") || 20;
  const sortBy = searchParams.get("sort-by") || "memberId";
  const orderBy = searchParams.get("order-by") || "ascend";

  // 선택된 옵션으로 쿼리스트링 변경하는 함수
  const onChangeValue = (e) => {
    searchParams.set(e.target.name, e.target.value);
    setSearchParams(searchParams);
  };

  // (userList / perPage)를 실행하는 함수
  const sliceDataByPerPage = (userList) => {
    const currentFirstIndex = (currentPage - 1) * perPage; // 0
    const currentLastIndex = currentPage * perPage; // 20, 50
    const slicedData = userList.slice(currentFirstIndex, currentLastIndex);
    return slicedData;
  };

  // 렌더링 될 떄 sortBy 옵션을 파악해서 해당 필터링 함수 실행: 경우의 수가 2가지 이상이므로 switch문으로 작성
  useEffect(() => {
    switch (sortBy) {
      case "memberId":
        SortById();
        break;
      case "name":
        SortByName();
        break;
      case "recentLogin":
        sortByLastLoginDate();
        break;
      case "birth":
        sortByBirthDate();
        break;
    }
  }, [searchParams]);

  // 회원번호 순(default)
  const SortById = () => {
    let IdList;
    if (orderBy === "ascend") {
      IdList = userList.sort((a, b) => (a.id < b.id ? -1 : 1));
      // console.log("아이디 기준 오름차순 정렬");
    } else {
      IdList = userList.sort((a, b) => (a.id > b.id ? -1 : 1));
      // console.log("아이디 기준 내림차순 정렬");
    }
    setSortedList(IdList);
    const slicedData = sliceDataByPerPage(IdList);
    setSortedList(slicedData);
  };

  // 이름 순
  const SortByName = () => {
    let nameList;
    if (orderBy === "ascend") {
      nameList = userList.sort((a, b) => a.name.localeCompare(b.name));
      // console.log("이름 기준 오름차순 정렬");
    } else {
      nameList = userList.sort((a, b) => b.name.localeCompare(a.name));
      // console.log("이름 기준 내림차순 정렬");
    }
    setSortedList(nameList);
    const slicedData = sliceDataByPerPage(nameList);
    setSortedList(slicedData);
  };

  // 로그인 시점 순
  const sortByLastLoginDate = () => {
    let lastLoginDateList;
    if (orderBy === "ascend") {
      lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
        // console.log("로그인 시점 기준 오름차순 정렬");
        return aDate - bDate;
      });
    } else {
      lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
        // console.log("로그인 시점 기준 내림차순 정렬");
        return bDate - aDate;
      });
    }
    const slicedData = sliceDataByPerPage(lastLoginDateList);
    setSortedList(slicedData);
  };

  //생년월일 순
  const sortByBirthDate = () => {
    let birthDateList;
    if (orderBy === "ascend") {
      birthDateList = userList.sort((a, b) => {
        const aDate = new Date(a.birthday);
        const bDate = new Date(b.birthday);
        // console.log("생일 기준 오름차순");
        return aDate - bDate;
      });
    } else {
      birthDateList = userList.sort((a, b) => {
        const aDate = new Date(a.birthday);
        const bDate = new Date(b.birthday);
        // console.log("생일 기준 내림차순");
        return bDate - aDate;
      });
    }
    const slicedData = sliceDataByPerPage(birthDateList);
    setSortedList(slicedData);
  };

  return (
    <ButtonBox>
      <select onChange={onChangeValue} name="per-page">
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select>
      {/* sort standard */}
      <select onChange={onChangeValue} name="sort-by">
        <option value={"memberId"}>회원번호</option>
        <option value={"name"}>이름</option>
        <option value={"birth"}>생일</option>
        <option value={"recentLogin"}>최근 로그인</option>
      </select>
      {/* sort method */}
      <select onChange={onChangeValue} name="order-by">
        <option value={"ascend"}>오름차순</option>
        <option value={"descend"}>내림차순</option>
      </select>
    </ButtonBox>
  );
};
export default Filter;

// select options
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  & > button {
    ${Button}
  }
  & > select {
    ${Button}
  }
`;
