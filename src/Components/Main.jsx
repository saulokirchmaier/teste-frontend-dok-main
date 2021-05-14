import React from 'react';
import person from '../images/foto_matheus.png';
import logoDok from '../images/logo_dok.svg';

function Main() {
  return (
    <main className="Main">
      <section className="container d-flex justify-content-between main-section">
        <div className="mx-2 main-section-1">
          <img src={ person } alt="Pessoa" />
        </div>
        <div className="d-flex flex-column justify-content-start mx-2 main-section-2">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <img src={ logoDok } alt="Dok despachante" height />
            <button type="button" className="rounded-pill btn btn-success btn-lg">Já sou afiliado</button>
            <h1 className="text-danger display-4 font-weight-bolder my-auto">Torne-se um afiliado do maior despachante do Brasil!</h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
