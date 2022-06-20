import styled from "styled-components";

function PlusAdd() {
  return (
    <div>
      <Plus>
        <Add>+</Add>
      </Plus>
    </div>
  );
}

const Plus = styled.div`
  background-color: #ee8548;
  /* position: absolute; */
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 50px;
  position: fixed;
`;

const Add = styled.p`
  color: white;
  font-size: 50px;
  margin-top: 14px;
`;

export default PlusAdd;
