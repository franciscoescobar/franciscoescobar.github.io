import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { FormWrapper } from "./styled";
const Form = () => (
  <FormWrapper>
    <Input
      placeholder="example@example.com"
      inputProps={{
        "aria-label": "E-mail"
      }}
      className="form-input"
    />
    <Input
      placeholder="Subject"
      inputProps={{
        "aria-label": "Subject"
      }}
      className="form-input"
    />
    <TextField
      label="Body"
      multiline
      rowsMax="4"
      margin="normal"
      className="form-input"
    />
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className="form-button"
    >
      Send
    </Button>
  </FormWrapper>
);

export default Form;
