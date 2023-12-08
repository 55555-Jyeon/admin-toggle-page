export const UserList = () => {
  // 랜덤 이름 생성
  const generateName = () => {
    const lastName = [
      "김",
      "이",
      "박",
      "최",
      "정",
      "강",
      "조",
      "윤",
      "장",
      "임",
      "한",
      "오",
      "서",
      "신",
      "권",
      "황",
      "안",
      "송",
      "전",
      "홍",
    ];
    const firstName = [
      "민준",
      "서윤",
      "도윤",
      "서연",
      "시우",
      "지우",
      "지호",
      "하윤",
      "지후",
      "서현",
      "준서",
      "하은",
      "건우",
      "민서",
      "우진",
      "지유",
      "선우",
      "윤서",
      "서진",
      "채원",
    ];
    const fullName =
      lastName[Math.floor(Math.random() * firstName.length)] +
      firstName[Math.floor(Math.random() * lastName.length)];
    return fullName;
  };

  // 랜덤 날짜 생성
  const generateRandomDate = (from, to) => {
    return new Date(
      from.getTime() + Math.random() * (to.getTime() - from.getTime())
    );
  };

  // 랜덤 생일 생성
  const generateBirthday = () => {
    const date = generateRandomDate(new Date(2023, 0, 1), new Date());
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // 랜덤 로그인 시간 생성
  const generateLastLoginDate = () => {
    const date = generateRandomDate(new Date(2023, 0, 1), new Date());
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hour = ("0" + date.getHours()).slice(-2);
    const minute = ("0" + date.getMinutes()).slice(-2);
    const second = ("0" + date.getSeconds()).slice(-2);
    return `${year}.${month}.${day}.${hour}:${minute}:${second}`;
  };

  const generatePhoneNumber = () => {
    return `010-${Math.floor(Math.random() * 9000) + 1000}-${
      Math.floor(Math.random() * 9000) + 1000
    }`;
  };

  const maskingPhoneNumber = () => {
    const split = generatePhoneNumber().split("-");

    split[1] = "*".repeat(split[1].length);
    return split.join("-");
  };

  return Array(200)
    .fill()
    .map((array, index) => ({
      // page: Math.floor(index / 20) + 1,
      id: index + 1,
      name: generateName(),
      birthday: generateBirthday(),
      number: maskingPhoneNumber(),
      createdAt: generateLastLoginDate(),
    }));
};
