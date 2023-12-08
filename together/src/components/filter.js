import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/common.style";
import { useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({
  users,
  setUsers,
  setUserPerPage,
  setButtonArray,
  currentPage,
  setCurrentPage,
}) => {
  // 뒤로가기
  const navigate = useNavigate();

  // const [param, setParam] = useSearchParams();
  // const sortBy = param.get("sort");
  // const sortAs = param.get("isAscend");
  // console.log("param값은?", sortBy, sortAs);

  // const [sortMethod, setSortMethod] = useState("null");
  // const [isAscend, setIsAscend] = useState("null");

  const [param, setParam] = useSearchParams();
  const method = param.get("sortAs");
  const standard = param.get("sortBy");
  console.log("sortAs param?", method);
  console.log("sortBy param?", standard);

  const [sortMethod, setSortMethod] = useState("null");
  const [sortStandard, setSortStandard] = useState("id");
  const [sortedList, setSortedList] = useState("");

  const changeUserPerPage = (e) => {
    if (e.target.value === "20") {
      setUserPerPage(20);
      setButtonArray([0, 1, 2, 3, 4]);
    }
    if (e.target.value === "50") {
      setUserPerPage(50);
      setCurrentPage(1);
      setButtonArray([0, 1, 2, 3]);
    }
  };

  // 오름차순(ascend), 내림차순(descend)
  // default : id 기준
  const defaultAscend = (e) => {
    if (e.target.value === "ascend") {
      setUsers(() => [...users].sort((a, b) => (a.id < b.id ? -1 : 1)));
      setSortMethod("오름차순");
    } else if (e.target.value === "descend") {
      setUsers(() => [...users].sort((b, a) => (a.id > b.id ? -1 : 1)));
      setSortMethod("내림차순");
    }
  };

  useEffect(() => {
    console.log(users);
    navigate(
      `/manage/member?page=${currentPage}&sortAs=${sortMethod}&sortBy=${sortStandard}`
    );
  }, [currentPage, sortMethod, sortStandard]);

  console.log("sortMethod :", sortMethod);
  console.log(" sortStandard :", sortStandard);

  // select sort standard
  const onChangeStandard = () => {
    let filteredList;

    if (sortMethod === "ascend") {
      switch (sortStandard) {
        case "name":
          setSortStandard("name");
          filteredList = setUsers(
            [...users].sort((a, b) => (a.id > b.id ? 1 : -1))
          );
          setSortedList(filteredList);
          break;
        case "birth":
          setSortStandard("birth");
          filteredList = setUsers(
            [...users].sort((a, b) => (a.birthday > b.birthday ? 1 : -1))
          );
          setSortedList(filteredList);
          break;
        case "login":
          setSortStandard("login");
          filteredList = setUsers(
            [...users].sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
          );
          setSortedList(filteredList);
          break;
      }
    } else if (sortMethod === "descend") {
      switch (sortStandard) {
        case "name":
          setSortStandard("name");
          filteredList = setUsers(
            [...users].sort((b, a) => (a.id > b.id ? 1 : -1))
          );
          setSortedList(filteredList);
          break;
        case "birth":
          setSortStandard("birth");
          filteredList = setUsers(
            [...users].sort((b, a) => (a.birthday > b.birthday ? 1 : -1))
          );
          setSortedList(filteredList);
          break;
        case "login":
          setSortStandard("login");
          filteredList = setUsers(
            [...users].sort((b, a) => (a.createdAt > b.createdAt ? 1 : -1))
          );
          setSortedList(filteredList);
          break;
      }
    }
  };

  // useEffect(() => {
  //   console.log(users);
  //   navigate(`/manage/member?page=${currentPage}&sort=${sortMethod}&isAscend=${isAscend}`);
  // }, [sortMethod, isAscend]);

  // console.log(sortMethod);

  // const filterByName = (e) => {
  //   if (e.target.value === "number") {
  //     setSortMethod("number");
  //   } else if (e.target.value === "name") {
  //     setSortMethod("name");
  //   } else if (e.target.value === "birth") {
  //     setSortMethod("birth");
  //   } else {
  //     setSortMethod("login");
  //   }
  // };

  // const defaultAscend = (e) => {
  //   if (e.target.value === "오름차순") {
  //     setIsAscend(true);
  //   } else {
  //     setIsAscend(false);
  //   }

  //   if (sortBy === "number" && sortAs === "true") {
  //     setUsers([...users].sort((a, b) => (a.id > b.id ? -1 : 1)));
  //   } else if (sortBy === "number" && sortAs === "false") {
  //     setUsers([...users].sort((b, a) => (a.id > b.id ? -1 : 1)));
  //   }
  //    else if (sortBy === "name" && sortAs === "true") {
  //     setUsers([...users].sort((a, b) => (a.name > b.name ? -1 : 1)));
  //   } else if (sortBy === "name" && sortAs === "false") {
  //     setUsers([...users].sort((b, a) => (a.name > b.name ? -1 : 1)));
  //   }
  // };

  // console.log(sortMethod);

  return (
    <ButtonBox>
      <select onChange={changeUserPerPage}>
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select>
      {/* sort standard */}
      <select onChange={onChangeStandard} name="standard">
        <option value={"number"}>회원번호</option>
        <option value={"name"}>이름</option>
        <option value={"birth"}>생일</option>
        <option value={"login"}>최근 로그인</option>
      </select>
      {/* sort method */}
      <select onChange={defaultAscend} name="method">
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
