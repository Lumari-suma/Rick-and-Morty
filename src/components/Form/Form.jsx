import React from "react";
import styles from "./Form.module.css";
import validation from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // console.log(userData); // Para chequear en navegador
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
      <img className={styles.img} src="https://aldescubierto.org/wp-content/uploads/2021/07/Portada_RickyMorty_web.jpg"/>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p className={styles.error}>{errors.email && errors.email}</p>

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className={styles.error}>{errors.password && errors.password}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
