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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [studentNo, setStudentNo] = useState("");
  const [LName, setLName] = useState("");
  const [FName, setFName] = useState("");
  const [MName, setMName] = useState("");
  const [college, setCollege] = useState("");
  const [progEnrolled, setProgEnrolled] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [yearLvl, setYearLvl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [blank, setBlank] = useState(false);
  const [ten, setTen] = useState(false);
  const [conf, setConf] = useState(false);
  const [eight, setEight] = useState(false);

  function reset(e) {
    e.preventDefault();

    setStudentNo("");
    setLName("");
    setFName("");
    setMName("");
    setCollege("");
    setProgEnrolled("");
    setYearLvl('0');
    setConfPass("");
    setPassword("");
  }

  let letters = /[a-z, A-Z]/;
  let uppercase = /[A-Z]/;
  let numbers = /[0-9]/;
  let special = /[^a-zA-Z0-9\-\/]/;
 
  const togglePopup = () => {
    if ((studentNo.length !=10) || (studentNo.match(letters))) {

      if (!studentNo || !FName || !LName || !MName || !college || !progEnrolled || !password || !confPass || yearLvl == '0') {
        setBlank(!blank);
      }

      else {
      setTen(!ten);
      }
    }
    else if (password.length < 8 || !password.match(uppercase) || !password.match(numbers) || !password.match(special)) {
      setEight(!eight);
    }
    else if (password != confPass) {
      setConf(!conf);
    }
    else {
      setIsOpen(!isOpen);
    }
  }

  return (
      <BoxContainer>
        <FormContainer>
        {isOpen && <PopUp
            content={<>
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="2 -2 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              Welcome, {FName}! You are now registered.</h1>
            
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

        {ten && <PopUp2
            content={<>
            <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 -1 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 
              0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
              &nbsp; The Student Number must be a 10 digit number.</h3>

           </>}

           handleClose={togglePopup}
          />} 

        {conf && <PopUp2
            content={<>
            <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 -1 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 
              0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
              &nbsp; The passwords do not match.</h3>

           </>}

           handleClose={togglePopup}
          />} 

        {eight && <PopUp2
            content={<>
            <h3 className = 'long'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 -1 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 
              0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
              &nbsp; The password must be atleast 8 characters, contains atleast 1 uppercase letter, 1 number and 1 special character.</h3>

           </>}

           handleClose={togglePopup}
          />} 


          <Input type="text" name="studentNo" value={studentNo} onChange={(e) => setStudentNo(e.target.value)} placeholder="Student ID Number"/>
          <Input type="text" name="LName" value={LName} onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
          <Input type="text" name="FName" value={FName} onChange={(e) => setFName(e.target.value)} placeholder="Given Name" />
          <Input type="text" name="MName" value={MName} onChange={(e) => setMName(e.target.value)} placeholder="Middle Name" />
          <Input type="text" name="college" value={college} onChange={(e) => setCollege(e.target.value)} placeholder="College" />
          <Input type="text" name="progEnrolled" value={progEnrolled} onChange={(e) => setProgEnrolled(e.target.value)} placeholder="Program Enrolled" />
          <select className="drop" id="year" value={yearLvl} onChange={(e) => setYearLvl(e.target.value)}>
              <option className="zero" value="0" >Year Level</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="3">4th Year</option>
         </select>
          
          <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
          <Input type="password" name="confPass"value={confPass} onChange={(e) => setConfPass(e.target.value)} placeholder="Confirm Password" />
       </FormContainer>
       
        <Marginer direction="vertical" margin={20} />
        <SubmitButton type="submit" onClick={togglePopup}>Register</SubmitButton>

        <Marginer direction="vertical" margin="0.3em" />
        <SubmitButton onClick={reset}>Cancel</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Login
          <Marginer direction="vertical" margin="2em" />
          </BoldLink>
        </MutedLink>
      </BoxContainer>
  );
}
