import React from 'react';
import person from '../images/foto_matheus.png';
import logoDok from '../images/logo_dok.svg';

function Main() {
  return (
    <main className="Main">
      <section className=" d-flex justify-content-center main-section">
        <div className="mx-5 main-section-1">
          <img src={ person } alt="Pessoa" />
        </div>
        <div className="container d-flex flex-wrap justify-content-between align-items-center mx-2 main-section-2">
          <img src={ logoDok } alt="Dok despachante" />
          <button type="button" className="rounded-pill btn btn-success btn-lg mx-5 font-weight-bolder">Já sou afiliado</button>
          <h1 className="display-4 font-weight-bolder my-auto">Torne-se um afiliado do maior despachante do Brasil!</h1>
        </div>
      </section>
    </main>
  );
}

export default Main;
