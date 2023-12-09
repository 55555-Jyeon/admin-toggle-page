import { UserList } from "../../__mock__/user_list";
import { useState } from "react";
import PagiNation from "../../components/pagination";
import Filter from "../../components/filter";
import styled from "styled-components";
import { AlignCenter, FlexCenter } from "../../styles/common.style";
import Pagination from "../../components/pagination2";

const MemberList = () => {
  const [users, setUsers] = useState(UserList());
  console.log("user list 200:", users);

  const listLength = users.length; // 200

  const [userPerPage, setUserPerPage] = useState(20); // 한 페이지 당 유저 수 (20명)
  const totalPage = Math.ceil(users.length / userPerPage); // 총 페이지 수 (10페이지)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const paginationUserList = [];

  for (let i = 0; i < totalPage; i++) {
    paginationUserList.push([
      users.slice(userPerPage * i, userPerPage * (i + 1)),
    ]);
  }
  const [userListPerPage, setUserListPerPage] = useState(
    paginationUserList[currentPage - 1]
  );

  console.log(userListPerPage);

  return (
    <Container>
      {/*       <Filter
        users={users} setUsers={setUsers} setUserPerPage={setUserPerPage}
        setButtonArray={setButtonArray} currentPage={currentPage} setCurrentPage={setCurrentPage}
      /> */}
      <Table>
        <thead>
          <tr>
            <Th>회원번호</Th>
            <Th>이름</Th>
            <Th>생년월일</Th>
            <Th>전화번호</Th>
            <Th>로그인시간</Th>
          </tr>
        </thead>
        <tbody>
          {userListPerPage[0].map((user) => (
            <tr>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.birthday}</Td>
              <Td>{user.number}</Td>
              <Td>{user.createdAt}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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

// member table
const Table = styled.table`
  ${FlexCenter}
  flex-direction: column;
`;
const Th = styled.th`
  padding: 10px 20px;
`;
const Td = styled.td`
  padding: 10px;
`;
