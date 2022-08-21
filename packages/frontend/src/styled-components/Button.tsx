import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "alert" | "danger";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-family: "Inter", sans-serif;
  gap: 1em;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "#059669";
      case "secondary":
        return "#9333ea";
      case "alert":
        return "#d97706";
      case "danger":
        return "#dc2626";
      default:
        return "#4b5563";
    }
  }};
  color: white;
`;
