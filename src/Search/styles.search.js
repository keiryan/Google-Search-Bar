import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  background-color: #202124;
  border-radius: 50px;
  border: 1px solid #5f6369;
  padding: 0 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #303134;
    border: none;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  outline: none;
  color: #fff;
  padding: 12px 20px;
  border: none;
  font-size: 14px;
  width: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`;
