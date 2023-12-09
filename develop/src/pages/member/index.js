import styled from "styled-components";
import MemberList from "./member_list";
import RegisterMember from "./register_member";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TabButton } from "../../styles/common.style";

const ManageMembers = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  const tabs = [
    { name: "회원목록", content: <MemberList /> },
    { name: "회원등록", content: <RegisterMember /> },
  ];

  const selectedTab = (index) => {
    setCurrentTab(index);
    // if (index === 1) {
    //   navigate("/manage?register-member");
    // }
  };

  return (
    <Wrapper>
      <Tabs>
        {tabs.map((tab, index) => (
          <li
            className={index === currentTab ? "tab focused" : "tab"}
            onClick={() => selectedTab(index)}
            key={index}
          >
            {tab.name}
          </li>
        ))}
      </Tabs>
      <Contents>{tabs[currentTab].content}</Contents>
    </Wrapper>
  );
};

export default ManageMembers;

const Wrapper = styled.div``;

const Tabs = styled.ul`
  ${TabButton}
  .tab {
    &.focused {
      background-color: #ccccff;
    }
  }
`;
const Contents = styled.div``;
