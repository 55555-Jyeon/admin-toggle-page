import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = ({ listLength }) => {
  // 뒤로가기
  //:id => 파라미터 => 라우터에 설정이 필요
  //?page=12 => 쿼리스트링 => url에 포함x => 라우터 관련 없음
  //useSearchParams => 쿼리스트링 추출 {page : 12 }
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  //필요한 변수 지정
  //총 콘텐츠의 길이(listLength) = 200
  //한 페이지에 보일 유저 목록(contentPerPage) = 20
  //총 페이지 수: contentPerPage / listLength = 10
  //현재 페이지(currentPage) = 1 ~ 10 중 선택된 페이지 => useState로 변경 가능하도록 설정

  const perPage = Number(params.get("perPage")) || 20;
  const page = Number(params.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(page);

  //그룹
  //현재 페이지 그룹 : currentGroup
  //한 그룹당 보여줄 페이지 개수 : pagesPerGroup = 5
  //총 페이지 그룹 개수 : 총 페이지 개수 / 한 그룹당 보여줄 페이지 개수 = 2
  const pagesPerGroup = 5;
  const totalPage = listLength / perPage; // 10
  const [currentGroup, setCurrentGroup] = useState(1);

  const lastGroup = Math.ceil(totalPage / pagesPerGroup);

  //[1,2,3,4,5] => 1그룹
  //[6,7,8,9,10] => 2그룹

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

  //페이지 그룹을 바꿔주는 함수 => 현재 페이지가 바뀔 때마다 실행
  useEffect(() => {
    const newCurrentGroup = Math.ceil(currentPage / pagesPerGroup);
    setCurrentGroup(newCurrentGroup);
    params.set("page", currentPage);
    setParams(params);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  //해당 페이지로 이동하는 함수
  const handleTarget = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <JumpFirst onClick={handleFirst}>{"<<"}</JumpFirst>
      <Prev onClick={handlePrev}>{"<"}</Prev>
      {/*버튼들 현재 그룹 => 해당 버튼들만 보여주기*/}
      {Array(pagesPerGroup)
        .fill()
        .map((el, idx) => {
          const pageNumber = (currentGroup - 1) * pagesPerGroup + idx + 1;

          // data가 없으면 얼리 리턴으로 버튼 생성 X
          if (listLength <= perPage * idx) return;

          return (
            <NumberButton
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
