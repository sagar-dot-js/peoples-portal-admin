import React from "react";
import {
  ErrorMessage,
  Input,
  Label,
  Parent,
  PlaceHolder,
} from "./TextField.style";

const TextField = ({ type, placeholder, ...restProps }) => {
  return (
    <Parent>
      <Label>
        <Input {...restProps} type={type}></Input>
        <PlaceHolder>{placeholder}</PlaceHolder>
        {/* <ErrorMessage>error message</ErrorMessage> */}
      </Label>
    </Parent>
  );
};

export default TextField;
