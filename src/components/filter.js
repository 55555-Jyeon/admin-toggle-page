import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/common.style";
import { useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({ sortedList, setSortedList, userList, setUserPerPage }) => {
  // 뒤로가기
  const navigate = useNavigate();
  const [param, setParam] = useSearchParams();

  const sortBy = param.get("sortBy") || "name";
  const orderBy = param.get("orderBy") || "ascend";
  const currentPage = param.get("page") || 1;
  const perPage = param.get("perPage") || 20;

  const onChangeValue = (e) => {
    param.set(e.target.name, e.target.value);
    setParam(param);
  };

  const changeUserPerPage = (e) => {
    if (e.target.value === "20") {
      // setUserPerPage(20);
    }
    if (e.target.value === "50") {
      // setUserPerPage(50);
    }
  };

  const changeStandard = () => {};
  const changeDirection = () => {};

  return (
    <ButtonBox>
      <select onChange={changeUserPerPage}>
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select>
      {/* sort standard */}
      <select onChange={changeStandard} name="standard">
        <option value={"number"}>회원번호</option>
        <option value={"name"}>이름</option>
        <option value={"birth"}>생일</option>
        <option value={"login"}>최근 로그인</option>
      </select>
      {/* sort method */}
      <select onChange={changeDirection} name="method">
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
