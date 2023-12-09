import styled from "styled-components";
import { FlexCenter } from "../styles/common.style";

const UserTable = ({ userList }) => {
  return (
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
        {userList.map((user, index) => (
          <tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.birthday}</Td>
            <Td>{user.number}</Td>
            <Td>{user.createdAt}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;

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
