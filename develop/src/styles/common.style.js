import { css } from "styled-components";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlignCenter = css`
  display: flex;
  align-items: center;
`;

export const JustifyCenter = css`
  display: flex;
  align-items: center;
`;

export const TabButton = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-weight: bold;
  padding-left: 0;
  list-style: none;
  cursor: pointer;

  .tab {
    margin: 0 10px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #555;
    transition: all 0.3s;

    &.focused {
      color: #1b1b1b;
    }
  }
`;
export const Button = css`
  cursor: pointer;
  border: none;
  background-color: #1b1b1b;
  border: 1px solid #555;
  border-radius: 4px;
  color: #999;
  margin: 10px;
  padding: 5px 15px;

  &.focused {
    color: #1b1b1b;
  }
`;
