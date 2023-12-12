import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuPage = ({ toggleState, setToggleState }) => {
  const navigate = useNavigate();
  // currentURL = baseURL + relativeURL
  const currentURL = window.location.href;
  const baseURL = "http://localhost:3000";
  const relativeURL = currentURL.replace(baseURL, "").split("?")[0];

  const MENU_LIST = [
    {
      title: "회원관리",
      baseURL: "user",
      options: [
        {
          subTitle: "회원목록",
          url: "/user/list",
        },
        {
          subTitle: "회원등록",
          url: "/user/register",
        },
      ],
    },
    {
      title: "상품관리",
      baseURL: "product",
      options: [
        {
          subTitle: "상품목록",
          url: "/product/list",
        },
        {
          subTitle: "상품등록",
          url: "/product/register",
        },
      ],
    },
  ];

  //로컬스토리지에 데이터가 있다면 처음투터 isToggle을 바꿔야 => useState
  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(toggleState));
  }, [toggleState]);

  const onIsToggleChange = () => {
    setToggleState((prev) => !prev);
  };

  //토글이 닫혀있어도 해당 페이지가 화면에 보여지면 토글 오픈하는 useEffect
  useEffect(() => {
    MENU_LIST.forEach((menu) => {
      if (relativeURL.includes(menu.baseURL)) {
        setToggleState((prev) => !prev);
      }
    });
  }, [relativeURL]);

  return (
    <>
      {MENU_LIST.map((menu, index) => {
        return (
          <Wrapper>
            <div>
              <h3
                onClick={() => {
                  onIsToggleChange();
                }}
              >
                {menu.title}
              </h3>
              <div>
                {toggleState[index] &&
                  menu.options.map((option) => {
                    return (
                      <p
                        onClick={() => {
                          navigate(option.url);
                        }}
                        currentPage={relativeURL === option.url}
                      >
                        {option.subTitle}
                      </p>
                    );
                  })}
              </div>
            </div>
          </Wrapper>
        );
      })}
    </>
  );
};
export default MenuPage;

const Wrapper = styled.div`
  color: white;
`;
