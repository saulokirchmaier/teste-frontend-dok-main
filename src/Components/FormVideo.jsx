import React from 'react';

function FormVideo() {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0];
    const email = event.target[1];
    const validEmail = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    if (!name.value.includes(' ')) {
      name.value = '';
      name.placeholder = 'Por favor informe nome e sobrenome';
    }
    if (!validEmail.test(email.value)) {
      email.value = '';
      email.placeholder = 'Por favor informe um e-mail válido';
    }
  }
  
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
        <form
          className="d-flex flex-column m-5 p-5 justify-content-around align-items-center"
          onSubmit={ (e) => handleSubmit(e) }
          noValidate
        >
          <input
            type="text"
            className="form-control"
            placeholder="Informe seu nome"
            name="name"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Informe seu email"
            name="email"
          />
          <div class="invalid-feedback">Por favor informe um e-mail válido</div>
          <button
            type="submit"
            className="rounded-pill btn btn-success btn-lg font-weight-bolder"
          >
            Sim, quero ser um afiliado
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormVideo;
