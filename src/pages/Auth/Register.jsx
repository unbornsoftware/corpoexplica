//Styles
import styles from "./Register.module.scss";

//Components
import Message from "../../components/Message";
import Loading from "../../components/Loading";

//Hooks
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux
import { register, reset } from "../../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      {(error || success) && (
        <Message key={1} type={error ? "warning" : "positive"} duration={5000}>
          {error && <p>{error}</p>}
          {!error && success && <p>{success}</p>}
        </Message>
      )}

      <div className={styles["pr-page__auth"]}>
        <div className={styles["pr-auth__logo"]}></div>
        <div className={styles["pr-auth__content"]}>
          <div className={styles["pr-auth__title"]}>
            <h1>Registro</h1>
            <div className="frow-center fgap-10 small-text">
              <p>Já possui uma conta?</p>
              <Link to="/login">Faça login</Link>
            </div>
          </div>
          <form className="wd-100p pr-box__form fcol fgap-10" onSubmit={handleSubmit}>
            <div className="wd-100p fcol fgap-20">
              <label className="pr-box__input">
                <span>Nome</span>
                <input
                  type="text"
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                ></input>
              </label>
              <label className="pr-box__input">
                <span>E-mail</span>
                <input
                  type="text"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seumelhoremail@email.com"
                ></input>
              </label>
              <label className="pr-box__input">
                <span>
                  <span className="flex-1">Senha</span>
                </span>
                <input
                  type="password"
                  value={password || ""}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                ></input>
              </label>
              <label className="pr-box__input">
                <span>
                  <span className="flex-1">Confirmar Senha</span>
                </span>
                <input
                  type="password"
                  value={confirmPassword || ""}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme a senha"
                ></input>
              </label>
              {!loading && (
                <button type="submit" className="app-button primary">
                  Cadastrar
                </button>
              )}
              {loading && (
                <button type="submit" className="app-button primary loading">
                  Aguarde...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
