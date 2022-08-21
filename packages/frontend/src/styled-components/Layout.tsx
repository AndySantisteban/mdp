import styled from "styled-components";

interface RowItemProps {
  width?: number;
}
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  height: 150px;
`;

export const RowItem = styled.div<RowItemProps>`
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  border-radius: 10px;
  border: 1px solid #6b7280;
  text-align: center;
  padding: 10px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
