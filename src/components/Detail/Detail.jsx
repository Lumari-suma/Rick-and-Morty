import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

//"/detail/:id" --> 55

export default function Detail() {
  const { id } = useParams(); // {id: 300}

  const [pjDetail, setPjDetail] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // algo
          setPjDetail(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert("Error"));

    // desmontaje
    return () => {
      // ejecutar cuando se desmonte
      console.log("Me desmonto, adios!");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.Detail}>
      <h1>{pjDetail.name && pjDetail.name}</h1>
      {/* <h5>{pjDetail.status ? pjDetail.status : ":( no hay status"}</h5> */}
      <img src={pjDetail.image} alt={pjDetail.name} />
      <section className={style.span}>
        <span className={style.species}>🐤{pjDetail.species}</span>
        <span className={style.gender}> ⚧️ {pjDetail.gender}</span>
        <span className={style.origin}>🌍 {pjDetail.origin?.name}</span>
      </section>
    </div>
  );
}

// HTML SEMANTICO --->

// [] montaje
// [id] update
// () => return () => {} desmontaje

// var aux = "messi"
// var nuevo = aux || "esto"

// var nueva = aux && aux

// condicion ? true : false
