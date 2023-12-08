import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserList } from "../__mock__/user_list";
import styled from "styled-components";

const PagiNation = ({
  buttonArray,
  setButtonArray,
  currentPage,
  setCurrentPage,
  userPerPage,
  totalPage,
  pageNationUserList,
  setUserListPerPage,
}) => {
  const navigate = useNavigate();
  // "<<" 버튼 클릭
  const handleFirst = () => {
    if (userPerPage === 50) {
      setCurrentPage(1);
      return setButtonArray([0, 1, 2, 3]);
    }
    setButtonArray([0, 1, 2, 3, 4]);
    setCurrentPage(1);
  };

  // ">>" 버튼 클릭
  const handleLast = () => {
    if (userPerPage === 50) setCurrentPage(4);
    // totalPage = 2 -> [0,1] , totalPage = 3 -> [0,1,2]
    if (totalPage < 5) return setButtonArray([0, 1, 2, 3]);
    setButtonArray([
      totalPage - 5,
      totalPage - 4,
      totalPage - 3,
      totalPage - 2,
      totalPage - 1,
    ]);
    setCurrentPage(totalPage);
  };

  // "<" 버튼 클릭
  const handlePrev = () => {
    const prevPage = buttonArray.map((value) => {
      setCurrentPage(currentPage - 1);
      if (currentPage <= 1) {
        setCurrentPage(1);
      }
      return value - 1;
    });
    if (prevPage[0] < 0) return [0, 1, 2, 3, 4];
    setButtonArray(prevPage);
  };

  // ">" 버튼 클릭
  const handleNext = () => {
    const nextPage = buttonArray.map((value) => {
      setCurrentPage(currentPage + 1);
      if (currentPage >= totalPage) {
        setCurrentPage(totalPage);
      }
      return value + 1;
    });
    if (nextPage[nextPage.length - 1] > totalPage - 1)
      return [
        totalPage - 5,
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
      ];
    setButtonArray(nextPage);
  };

  const handlePages = (pageButton) => {
    setCurrentPage(pageButton + 1);
  };

  useEffect(() => {
    console.log(currentPage);
    setUserListPerPage(pageNationUserList[currentPage - 1]);
    navigate(`/manage/member?page=${currentPage}`);
  }, [currentPage, userPerPage]);

  return (
    <Pagination>
      <JumpFirst onClick={handleFirst}>{"<<"}</JumpFirst>
      <Prev onClick={handlePrev}>{"<"}</Prev>
      {buttonArray.map((pageButton) => (
        <NumberButton
          onClick={() => handlePages(pageButton)}
          style={{
            backgroundColor:
              currentPage === pageButton + 1 ? "#ccccff" : "#121212",
          }}
        >
          {pageButton + 1}
        </NumberButton>
      ))}
      <Next onClick={handleNext}>{">"}</Next>
      <JumpLast onClick={handleLast}>{">>"}</JumpLast>
    </Pagination>
  );
};

export default PagiNation;

// pagination
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 15px 0 30px;

  & > button {
    background-color: #121212;
    color: #555;
    border: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #ccccff;
    }
  }
`;
const JumpFirst = styled.button``;
const Prev = styled.button``;
const NumberButton = styled.button``;
const Next = styled.button``;
const JumpLast = styled.button``;
