import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import PopUp from "./PopUp";
import PopUp2 from "./PopUp2";
import "./popup.css";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [studentNo, setStudentNo] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  
  const [blank, setBlank] = useState(false);
 
  const togglePopup = () => {
    if (studentNo == '2018116812' && password == 'MVBasbas03!'){
      setIsOpen(!isOpen);
    }
    
    else if (studentNo !='2018116812' || password != '12345'){

      if (studentNo == '' || password == ''){
        setBlank(!blank);
      }
      else {
        setIsInvalid(!isInvalid);
      }
    }
  }

  function reset(e) {
    e.preventDefault();

    setStudentNo("");
    setPassword("");
  }

  


  return (
      <BoxContainer>
        <FormContainer>
            <Input type="text" name="studentNo" value={studentNo} onChange={(e) => setStudentNo(e.target.value)} placeholder="Student ID Number" />
            <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </FormContainer>
        {isOpen && <PopUp
            content={<>
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="2 -2 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              Welcome! Your student number is {studentNo}.</h1>
            
           </>}
           handleClose={togglePopup}
          />}

        {isInvalid && <PopUp2
            content={<>
            <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 -1 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 
              0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
              &nbsp; Invalid Student Number and/or Password.</h3>
            
           </>}
           handleClose={togglePopup}
          />}
        
        {blank && <PopUp2
            content={<>
            <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 -1 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 
              0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
              &nbsp; Please fill out all the details.</h3>

           </>}

           handleClose={togglePopup}
          />}

        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forgot your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={togglePopup}>Login</SubmitButton>
        
        <Marginer direction="vertical" margin="0.3em" />
        <SubmitButton onClick={reset}>Cancel</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an account?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Register
          </BoldLink>
        </MutedLink>
      </BoxContainer>
     
  );
}
