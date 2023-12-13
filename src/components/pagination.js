import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = ({ listLength }) => {
  // 뒤로가기
  //useSearchParams => 쿼리스트링 추출 {page : 12 }
  const [searchParams, setSearchParams] = useSearchParams();

  const perPage = Number(searchParams.get("perPage")) || 20;
  const page = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(page);

  const pagesPerGroup = 5;
  const totalPage = listLength / perPage;

  //처음 페이지 이동 함수
  const handleFirst = () => {
    setCurrentPage(1);
  };

  //마지막 페이지 이동 함수
  const handleLast = () => {
    setCurrentPage(totalPage);
  };

  //뒤로 가기 함수
  const handleNext = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //앞으로 가기 함수
  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // 페이지 그룹을 바꿔주는 함수 => 현재 페이지가 바뀔 때마다 실행
  useEffect(() => {
    const newCurrentGroup = Math.ceil(currentPage / pagesPerGroup);
    searchParams.set("page", currentPage);
    setSearchParams(searchParams);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  //해당 페이지로 이동하는 함수
  const handleTarget = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Buttons = Array(pagesPerGroup)
    .fill()
    .map((button, idx) => {
      const currentGroup = Math.ceil(currentPage / 5);
      const pageNumber = (currentGroup - 1) * pagesPerGroup + idx + 1;
      return pageNumber;
    });

  return (
    <Wrapper>
      <JumpFirst onClick={handleFirst}>{"<<"}</JumpFirst>
      <Prev onClick={handlePrev}>{"<"}</Prev>
      {/* 20, 50 filter 값 변경에 따라 달라질 페이지네이션 배열의 길이 */}
      {Buttons.map((pageNumber, idx) => {
        if (!pageNumber) return;
        return (
          <NumberButton
            key={idx}
            onClick={() => {
              handleTarget(pageNumber);
            }}
            style={{
              backgroundColor: pageNumber === page ? "#ccccff" : "#121212",
            }}
          >
            {pageNumber}
          </NumberButton>
        );
      })}
      <Next onClick={handleNext}>{">"}</Next>
      <JumpLast onClick={handleLast}>{">>"}</JumpLast>
    </Wrapper>
  );
};

export default Pagination;

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
