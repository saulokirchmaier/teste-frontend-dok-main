import React from 'react';

function FormVideo() {
  return (
    <section className="FormVideo">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <iframe
          className="m-5"
          src="https://www.youtube.com/embed/ZIKEOAJtq1w"
          title="Dok despachante"
          height="345.22"
          width="621.4"
        />
        <form className="d-flex flex-column m-5 p-5 justify-content-around align-items-center form-floating">
          <input type="text" className="form-control " placeholder="Informe seu nome" />
          <input type="email" className="form-control" placeholder="Informe seu email" />
          <button
            type="submit"
            className="rounded-pill btn btn-success btn-lg"
          >
            Sim, quero ser um afiliado
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormVideo;
