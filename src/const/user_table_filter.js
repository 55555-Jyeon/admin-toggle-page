export const USER_TABLE_FILTER = [
  {
    type: "perPage",
    option: [
      {
        value: 20,
        text: "20개씩",
      },
      {
        value: 50,
        text: "50개씩",
      },
    ],
  },
  {
    type: "sortBy",
    option: [
      {
        value: "name",
        text: "이름 순",
      },
      {
        value: "recentLogin",
        text: "마지막 로그인 순",
      },
      { value: "birth", text: "생년월일 순" },
    ],
  },
  {
    type: "orderBy",
    option: [
      {
        value: "ascend",
        text: "오름차순",
      },
      {
        value: "descend",
        text: "내림차순",
      },
    ],
  },
];
