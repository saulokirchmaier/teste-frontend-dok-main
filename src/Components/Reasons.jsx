import React from 'react';
import coin from '../images/moeda.svg';
import percent from '../images/porcentagem.svg';
import gift from '../images/presente.svg';
import mail from '../images/enviar.svg';
import carr from '../images/carro.png';

function Reasons() {
  return (
    <section className="Reasons d-flex flex-column">
      <div className="align-content-center justify-content-center text-secondary p-5">
        <h1 className="text-center">
          Conheça TODOS os motivos para ser um Afiliado DOK Despachante
        </h1>
        <section className="reasons-cards d-flex flex-wrap justify-content-center m-3">
          <div className="reason bg-light d-flex align-items-center justify-content-around p-3 m-3">
            <span className="reason m-2 p-4 d-flex rounded-circle">
              <img src={ percent } alt="Porcentagem" className="m-1"/>
            </span>
            <p className="m-3">
              Fature <strong>40%</strong> dos horários de cada pedido com pagamento aprovado!
            </p>
          </div>
          <div className="reason bg-light d-flex align-items-center justify-content-around p-3 m-3">
            <span className="reason m-2 p-4 d-flex rounded-circle">
              <img src={ mail } alt="Telegram" className="m-1"/>
            </span>
            <p className="m-3">
            Tenha suporte diário em nosso <strong>grupo exclusivo</strong> do Telegram.
            </p>
          </div>
          <div className="reason bg-light d-flex align-items-center justify-content-around p-3 m-3">
            <span className="reason m-2 p-4 d-flex rounded-circle">
              <img src={ gift } alt="Premiações" className="m-1"/>
            </span>
            <p className="m-3">
              Receba <strong>premiações</strong> a cada cota de vendas alcançadas! Ganhe Smartwatches, Smartphones e muito mais.
            </p>
          </div>
          <div className="reason bg-light d-flex align-items-center justify-content-around p-3 m-3">
            <span className="reason m-2 p-4 d-flex rounded-circle">
              <img src={ coin } alt="Moedas" className="m-1"/>
            </span>
            <p className="m-3">
              Procurando por renda complementar? Fature até R$1000.00 por mês fazendo uma única venda por dia.
            </p>
          </div>
        </section>
      </div>
      <div className="reason-why d-flex p-5 align-content-around justify-content-center">
        <section className="d-flex flex-column text-rigth p-5">
          <h1 className="font-weight-bolder">Já pensou em quantos veículos existem só no estado de São Paulo?</h1> 
          <h1>Há 30 milhões de pessoas para você vender esse produto</h1>
        </section>
        <img src={ carr } alt="Carro" />
      </div>
    </section>
  );
}

export default Reasons;
