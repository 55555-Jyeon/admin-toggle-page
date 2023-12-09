import styled from "styled-components";

import { useState } from "react";
import ProductList from "./product_list";
import RegisterProduct from "./register_product";
import { useNavigate } from "react-router-dom";
import { TabButton } from "../../styles/common.style";

const ManageProducts = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  const tabs = [
    { name: "물품목록", content: <ProductList /> },
    { name: "물품등록", content: <RegisterProduct /> },
  ];

  const selectedTab = (index) => {
    setCurrentTab(index);
    // console.log(index);
    // if (index !== 1) {
    //   navigate("/");
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

export default ManageProducts;

const Wrapper = styled.div``;

const Tabs = styled.ul`
  ${TabButton}

  .tab {
    &.focused {
      background-color: #40e0d0;
    }
  }
`;
const Contents = styled.div``;
