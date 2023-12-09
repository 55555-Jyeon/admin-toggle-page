import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/common.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import { USER_TABLE_FILTER } from "../const/user_table_filter";

const Filter = ({ sortedList, setSortedList, userList, setUserPerPage }) => {
  // 뒤로가기
  const navigate = useNavigate();
  const [param, setParam] = useSearchParams();
  const userTableFilterList = USER_TABLE_FILTER;

  const sortBy = param.get("sortBy") || "name";
  const orderBy = param.get("orderBy") || "ascend";
  const currentPage = param.get("page") || 1;
  const perPage = param.get("perPage") || 20;

  //선택된 옵션으로 쿼리스트링 변경
  const onChangeValue = (e) => {
    param.set(e.target.name, e.target.value);
    setParam(param);
  };

  //현재 페이지에 보이는 콘텐츠 리스트
  const sliceDataByPerPage = (list) => {
    const currentFirstIndex = (currentPage - 1) * perPage;
    const currentLastIndex = currentPage * perPage;
    const slicedData = list.slice(currentFirstIndex, currentLastIndex);
    return slicedData;
  };

  //렌더링 될 떄 sortBy 옵션을 파악해서 해당 필터링 함수 실행
  useEffect(() => {
    if (sortBy === "name") {
      SortByName();
    } else if (sortBy === "recentLogin") {
      sortByLastLoginDate();
    } else {
      sortByBirthDate();
    }
  }, [param]);

  // 이름 순
  const SortByName = () => {
    let nameList;
    if (orderBy === "ascend") {
      nameList = userList.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      nameList = userList.sort((a, b) => b.name.localeCompare(a.name));
    }
    setSortedList(nameList);
    const slicedData = sliceDataByPerPage(nameList);
    setSortedList(slicedData);
  };

  // 마지막 로그인 순
  const sortByLastLoginDate = () => {
    let lastLoginDateList;
    if (orderBy === "ascend") {
      lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
        return aDate - bDate;
      });
    } else {
      lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
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
        const aDate = new Date(a.birthDate);
        const bDate = new Date(b.birthDate);
        return aDate - bDate;
      });
    } else {
      birthDateList = userList.sort((a, b) => {
        const aDate = new Date(a.birthDate);
        const bDate = new Date(b.birthDate);
        return bDate - aDate;
      });
    }
    const slicedData = sliceDataByPerPage(birthDateList);
    setSortedList(slicedData);
  };

  return (
    <ButtonBox>
      <select onChange={onChangeValue} name="perPage">
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select>
      {/* sort standard */}
      <select onChange={onChangeValue} name="sortBy">
        <option value={"number"}>회원번호</option>
        <option value={"name"}>이름</option>
        <option value={"birth"}>생일</option>
        <option value={"login"}>최근 로그인</option>
      </select>
      {/* sort method */}
      <select onChange={onChangeValue} name="orderBy">
        <option>나열 방향</option>
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
