import styled from "styled-components";

export const StatusCircle = styled.p`
  width: 10px;
  height: 10px;
  display: inline-block;
  margin: auto;
  background-color: ${(props) => props.color};
`;
