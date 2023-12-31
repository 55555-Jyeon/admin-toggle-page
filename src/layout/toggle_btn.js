import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import member from "../images/user.png";
import product from "../images/package.png";

const ToggleButton = () => {
  const navigate = useNavigate();
  // 뒤로가기 클릭 시 toggle UI도 같이 변경되게 하기 위한 주소 상수로 설정
  const currentURL = window.location.href;
  const baseURL = "http://localhost:3000";
  //현재 url에서 baseURL과 파라미터를 제외한 주소만 가져오기
  const relativeURL = currentURL.replace(baseURL, "").split("?")[0];

  // 새로고침 시에도 데이터 고정시키는 방법: localStorage
  // localStorage에는 숫자,array,bool형 모두 string으로 저장되므로 JSON stringify와 JSON parse를 해줘야 한다

  // toggle state
  const [isRight, setIsRight] = useState(
    localStorage.getItem("toggleState")
      ? JSON.parse(localStorage.getItem("toggleState")) //로컬 스토리지에 toggleState라는 데이터가 저장되 있을때
      : false // 없을 때 (첫 렌더링)
  );

  const handleToggle = () => {
    setIsRight(!isRight);
    console.log("relativeURL", relativeURL);
  };

  useEffect(() => {
    //로컬스토리지에 데이터가 있다면 처음부터 isRight의 상태를 바꿔야함
    localStorage.setItem("toggleState", JSON.stringify(isRight));

    if (isRight) {
      navigate("/manage/member");
    } else {
      navigate("/manage/product");
    }
  }, [isRight]);

  //토글이 닫혀있어도 해당 페이지가 화면에 보여지면 토글 오픈하는 useEffect

  return (
    <Container onClick={handleToggle}>
      <Background className={` ${isRight ? "toggle--checked" : null}`}>
        <Toggle className={` ${isRight ? "toggle--checked" : null}`}>
          {isRight ? <img src={member} /> : <img src={product} />}
        </Toggle>
      </Background>
      <Content>
        {isRight ? (
          <div
            onClick={() => navigate("/manage/member")}
            toggleState={isRight}
            setToggleState={setIsRight}
          />
        ) : (
          <div
            onClick={() => navigate("/manage/product")}
            toggleState={isRight}
            setToggleState={setIsRight}
          />
        )}
        {/* <MenuPage toggleState={isRight} setToggleState={setIsRight} /> */}
      </Content>
    </Container>
  );
};

export default ToggleButton;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
const Background = styled.div`
  position: absolute;
  width: 75px;
  height: 36px;
  border-radius: 30px;
  background-color: #40e0d0;

  &.toggle--checked {
    background-color: #ccccff;
    transition: 0.5s;
  }
`;
const Toggle = styled.div`
  position: absolute;
  top: 2px;
  left: 1px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #1b1b1b;
  transition: 0.5s;

  &.toggle--checked {
    left: 41px;
    transition: 0.5s;
  }

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
  }
`;
const Content = styled.div`
  margin-top: 50px;
`;
