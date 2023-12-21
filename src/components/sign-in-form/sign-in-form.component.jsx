import React from "react";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      alert("Error at Google login");
    }
  };

  const onChangeFormHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Wrong email or password.");
      } else {
        alert("Error at login");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={onChangeFormHandler}
          name={"email"}
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={onChangeFormHandler}
          name={"password"}
          value={password}
        />
        <div className="buttons-container">
          <Button type="Submit">Sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={"google"}
          >
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
