import { UserList } from "../../__mock__/user_list";
import { useState } from "react";
import styled from "styled-components";
import { AlignCenter, FlexCenter } from "../../styles/common.style";
import Pagination from "../../components/pagination";
import UserTable from "../../components/user_table";
import Filter from "../../components/filter";

const MemberList = () => {
  const userList = UserList(200);
  const listLength = userList.length; // 200

  //필터를 통해 정렬, 정제된 유저 목록을 관리
  const [sortedList, setSortedList] = useState(userList);

  return (
    <Container>
      <Filter
        sortedList={sortedList}
        setSortedList={setSortedList}
        userList={userList}
      />
      <UserTable userList={sortedList} />
      <Pagination listLength={listLength} />
    </Container>
  );
};

export default MemberList;

const Container = styled.div`
  ${AlignCenter}
  flex-direction: column;
  width: 1000px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.02);
  box-shadow: 15px 15px 15px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 100px;
`;
