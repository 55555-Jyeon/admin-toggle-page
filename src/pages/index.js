import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuPage = () => {
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const baseURL = "http://localhost:3000";
  //현재 url에서 baseURL과 파라미터를 제외한 주소만 가져오기
  const relativeURL = currentURL.replace(baseURL, "").split("?")[0];

  //사이드 메뉴 상태
  const [isToggle, setIsToggle] = useState(
    localStorage.getItem("toggleState")
      ? JSON.parse(localStorage.getItem("toggleState")) //로컬 스토리지에 toggleState라는 데이터가 저장되 있을때
      : [false, false] //없을때 (첫 렌더링)
  );

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
    localStorage.setItem("toggleState", JSON.stringify(isToggle));
  }, [isToggle]);

  const onIsToggleChange = (index) => {
    setIsToggle((prev) => {
      const updatedState = [...prev];
      updatedState[index] = !prev[index];
      return updatedState;
    });
  };

  //토글이 닫혀있어도 해당 페이지가 화면에 보여지면 토글 오픈하는 useEffect
  useEffect(() => {
    MENU_LIST.forEach((menu, index) => {
      if (relativeURL.includes(menu.baseURL)) {
        setIsToggle((prev) => {
          const updatedState = [...prev];
          updatedState[index] = true;
          return updatedState;
        });
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
                  onIsToggleChange(index);
                }}
                open={isToggle[index]}
              >
                {menu.title}
              </h3>
              <div>
                {isToggle[index] &&
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
