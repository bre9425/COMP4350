import React from 'react';
import useSignUpContext from "../../hooks/useSignUpContext"
import './LandingPage.css'
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const USER_REGEX = /^[A-Za-z0-9]{4,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const serverURL = process.env.REACT_APP_SERVER_URL;
const serverPort = process.env.REACT_APP_SERVER_PORT;

const Basics = () => {

    const { data, handleChange } = useSignUpContext()

    const [user, setUser] = useState('');
    const [valid, setValid] = useState(true); 
    const [unique, setUnique] = useState(true); 

    const [pwd, setPwd] = useState('');
    const [matchpwd, setMatch] = useState(''); 
    const [validPwd, setValidPwd] = useState(true);
    const [matches, setMatchPwd] = useState(true);


    const checkDuplicate = async () => {
        try {
            const res = await fetch(`${serverURL}:${serverPort}/api/user/validate/`, {
                method: "POST",
    
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'username': user
                }),
            })
    
            if (res.status === 200) {
                setUnique(true);
            }
            else {
                setUnique(false); 
            }
        } catch (err) {
    
        }
    }; 

    const handleBlur = (value) => {
        if(value !== ''){
            setValid(USER_REGEX.test(user));
            checkDuplicate(); 
        }
        else {
            setValid(true); 
        }
    }

    const handlePwdBlur = (value) => {
        if(value !== '') {
            setValidPwd(PWD_REGEX.test(pwd)); 
        }
        else {
            setValid(true); 
        }
    }

    useEffect( () => {
        setMatchPwd(pwd === matchpwd); 
    }, [pwd, matchpwd])

    const handleUserChange = (e) => {
        handleChange(e); 
        setUser(e.target.value)
    } 

    const handlePwdChange = (e) => {
        handleChange(e); 
        setPwd(e.target.value)
    } 
    const handleConfirmPwdChange = (e) => {
        handleChange(e); 
        setMatch(e.target.value)
    } 

    const content = (
        <div className="basics-div" style={{width:"min-content"}}>
            <input
                className="basic-input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={handleUserChange}
                onBlur={e => handleBlur(e.target.value)}
            />
            <p id="uidnote" className={!valid ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} style={{marginRight:"2px"}}/>
                Must be 4 to 20 characters consisting of numbers and letters only.
            </p>
            <p id="uidnote" className={!unique ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} style={{marginRight:"2px"}}/>
                Username already in use
            </p>

            <label htmlFor="password" className="offscreen">Password</label>
            <input
                className="basic-input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handlePwdChange}
                onBlur={e => handlePwdBlur(e.target.value)}
            />
            <p id="uidnote" className={!validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} style={{marginRight:"2px"}}/>
                Password must contain one upppercase, one lowercase, one number, one special character and be between 8-24 characters.
            </p>

            <label htmlFor="confirmPassword" className="offscreen">Confirm Password</label>
            <input
                className="basic-input"
                type="password"
                id="confirmassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={handleConfirmPwdChange}
                onBlur={e => setMatch(e.target.value)}
            />
            <p id="uidnote" className={!matches ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} style={{marginRight:"2px"}}/>
                Passwords do not match.
            </p>
            <label className="basic-label" htmlFor="DOB">Birthday</label>
            <input
                className="basic-input"
                type="date"
                id="birthday"
                name="DOB"
                placeholder="Birthday (MM/DD/YYYY)"
                pattern="\d{2}\/\d{2}\/\d{4}"
                value={data.DOB}
                onChange={handleChange}
            />
        </div>
    )

    return content
}
export default Basics