import styled from "styled-components";
import MemberList from "./member_list";
import RegisterMember from "./register_member";
import { useEffect, useState } from "react";
import { TabButton } from "../../styles/common.style";
import { useNavigate, useSearchParams } from "react-router-dom";

const ManageMembers = ({ toggleState, setToggleState }) => {
  // 뒤로가기: useSearchParams & useEffect
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { name: "회원목록", content: <MemberList />, URL },
    {
      name: "회원등록",
      content: <RegisterMember />,
    },
  ];

  const selectedTab = (index) => {
    setCurrentTab(index);
    navigate();
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
