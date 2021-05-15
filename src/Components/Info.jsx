import React from 'react';
import carrsPark from '../images/carros_parque.png';
import wallet from '../images/carteira.png';

function Info() {
  return (
    <section className="Info text-secondary d-flex flex-column p-xl-5 align-items-center">
      <div className="d-flex p-xl-5 info-content">
        <article className="px-5">
          <p>
            Somente na capital paulista existem mais de 8.603.239 veículos circulando diariamente, de acordo com a pesquisa da Companhia de Engenharia de Tráfego (CET), de 2018.
          </p>
          <p className="text-danger">
            No Estado de São Paulo há mais de 30 milhões de veículos. Isso quer dizer que você tem 30 milhões de potenciais clientes que precisam e que vão regularizar os débitos dos seus veículos anualmente.
          </p>
          <p>
            Começando pelo IPVA, nos 3 primeiros meses do ano, passando para o licenciamento, que vai até dezembro, sem contar com eventuais multas e condutores inadimplentes que buscam parcelamentos durante o ano todo.
          </p>
        </article>
        <img src={ carrsPark } alt="Carros" className="carrs-park" />
      </div>
      <h2 className="text-center font-weight-bolder">Seja um afiliado e aproveite todo o potencial deste público!</h2>
      <div  className="d-flex p-xl-5 info-content">
        <img src={ wallet } alt="wallet" className="wallet" />
        <article className="px-5">
          <p>
            Com o DOK Despachante você oferece praticidade e solução para quem busca pagar seus débitos com a menor burocracia possível. Nossos serviços funcionam 100% online, com parcelamentos em até 12x, divididos em 6 diferentes cartões, com as menores taxas do mercado.
          </p>
          <p>
            Afilie-se, leve nossos serviços para quem precisa e aproveite a renda extra que você sempre sonhou. Faça parte do time do despachante que mais cresce no Brasil, com 15 anos de experiência no mercado de veículos paulista.
          </p>
        </article>
      </div>
      <button className="rounded-pill btn btn-success btn-lg font-weight-bolder m-5">
        QUERO SER UM AFILIADO
      </button>
    </section>
  );
}

export default Info;
