import styled from "styled-components";

export const Parent = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const Label = styled.label`
  position: relative;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 17rem;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #333;
  :focus-visible {
    border: none;
  }
  &:focus {
    border: none;
    outline: 1px solid #1765dc;
  }
  // &:valid + span,--> tell this later to show placeholder comes back
  &:focus + span,
  &.dirty + span {
    top: -17px;
    font-size: 12px;
    color: #000;
    padding: 0.2em 0.4em;
  }
`;

export const PlaceHolder = styled.span`
  position: absolute;
  color: #000;
  left: 5%;
  background-color: #fff;

  top: 2%;
  font-size: 12px;
  color: #000;
  transition: top 0.2s ease-in, color 0.3s ease-in;
`;

// export const ErrorMessage = styled.span`
//   width: 17rem;
//   display: flex;
//   align-items: center;
//   padding: 0 8px;
//   font-size: 12px;
//   color: red;
//   height: 24px;
// `;
