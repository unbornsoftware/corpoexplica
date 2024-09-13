import React from 'react'

//Styles
import styles from "./Login.module.scss";

//Components
import Message from "../../components/Message";
import Loading from "../../components/Loading";

//Hooks
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Redux
import {login, reset } from "../../slices/authSlice";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {loading, error, success} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {    
    e.preventDefault();  
    const user = {email, password};
    dispatch(login(user));
  };

  useEffect(() => {
    if(success){
      navigate("/dashboard");
    }
    dispatch(reset());
  },[dispatch, success, navigate]);


  return (
    <>

      {error && (<Message key={1} type="warning" duration={5000}><p>{error}</p></Message>)}
      {loading && (<Loading/>)}

      <div className={styles["pr-page__auth"]}>
        <div className={styles["pr-auth__logo"]}></div>
        <div className={styles["pr-auth__content"]}>
          <div className={styles["pr-auth__title"]}>
            <h1>Acessar</h1>
            <div className="frow-center fgap-10 small-text">
              <p>Não possui uma conta?</p>
              <Link to="/register">Cadastre-se aqui</Link>
            </div>
          </div>
          <form className="wd-100p pr-box__form fcol fgap-10" onSubmit={handleSubmit}>
            <div className="wd-100p fcol fgap-20">
              <label className="pr-box__input">
                <span>E-mail</span>
                <input
                  type="email"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)} required
                  placeholder="seumelhoremail@email.com"
                ></input>
              </label>
              <label className="pr-box__input">
                <span><span className="flex-1">Password</span><Link to="/register">Esqueceu sua senha?</Link></span>
                <input
                  type="password"
                  value={password || ""}
                  onChange={(e) => setPassword(e.target.value)} required
                  placeholder="Enter password"
                ></input>
              </label>
              {!loading && ( <button type="submit" className="app-button primary">Acessar</button>)}
              {loading && (<button type="submit" className="app-button primary loading" disabled>Aguarde...</button>)}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
