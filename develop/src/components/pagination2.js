import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserList } from "../__mock__/user_list";
import styled from "styled-components";

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  // 재사용 가능한 페이지네이션 만들기
  // 버튼 배열 >> new Array(limit), (x, i) => i)
  const navigate = useNavigate();

  // state for pagination
  const [buttonArray, setButtonArray] = useState(1);
  const [currentButtonArray, setCurrentButtonArray] = useState(0);

  const numPages = Math.ceil(totalPage / 2); // 한 페이지에 보일 페이지네이션 개수

  // jump first page
  const handleFirst = () => {};

  // jump last page
  const handleLast = () => {};

  // prev page
  const handlePrev = () => {};

  // next page
  const handleNext = () => {};

  return (
    <Wrapper>
      <JumpFirst onClick={handleFirst}>{"<<"}</JumpFirst>
      <Prev onClick={handlePrev}>{"<"}</Prev>
      {Array(numPages)
        .fill()
        .map((button, index) => (
          <button
            key={index + 1}
            onClick={() => {
              setCurrentPage(index + 1);
            }}
            /* style={{ backgroundColor: currentPage ? "#ccccff" : "#121212"}} */
          >
            {index + 1}
          </button>
        ))}
      <Next onClick={handleNext}>{">"}</Next>
      <JumpLast onClick={handleLast}>{">>"}</JumpLast>
    </Wrapper>
  );
};

export default Pagination;

// pagination
const Wrapper = styled.div`
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
