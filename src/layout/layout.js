import { Outlet } from "react-router-dom";
import ToggleButton from "./toggle_btn";
import styled from "styled-components";
import { AlignCenter } from "../styles/common.style";

const Layout = () => {
  return (
    <Wrapper>
      <Title>Manage Page</Title>
      {/* <Question>어떤 것을 관리하시겠습니까?</Question> */}
      <ToggleButton />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  ${AlignCenter}
  flex-direction: column;
  background-color: #121212;

  & > div:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #555;
  }
`;
const Title = styled.h1`
  letter-spacing: 5px;
  color: #020202;
  text-shadow: -1px -1px 3px #020202, 2px 2px 4px #1b1b1b;
`;
const Question = styled.h3`
  color: #333;
  text-shadow: 0px 11px 10px #020202;
`;
