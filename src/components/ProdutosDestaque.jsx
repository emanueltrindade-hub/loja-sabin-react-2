import React, { useState, useRef } from 'react';

const ProdutosDestaque = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const referenciaCarrossel = useRef(null);

  const itensDestaque = [
    {
      id: 1,
      nome: 'Pacote Outubro Rosa',
      preco: 'R$ 110,00',
      icone: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 2,
      nome: 'Pacote Novembro Azul',
      preco: 'R$ 110,00',
      icone: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 3,
      nome: 'Pacote Dezembro Vermelho',
      preco: 'R$ 140,00',
      icone: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg'
    },
    {
      id: 4,
      nome: 'GenomaCare - Triagem Genética do Adulto',
      preco: 'R$ 1.650,00',
      parcelas: '12x sem juros (R$137,50 cada)',
      etiqueta: 'NOVO SERVIÇO',
      corEtiqueta: 'orange'
    },
    {
      id: 5,
      nome: 'Teste de Glicemia',
      preco: 'R$ 15,00',
      etiqueta: 'NOVO SERVIÇO',
      corEtiqueta: 'orange'
    },
    {
      id: 6,
      nome: 'Exame de Colesterol',
      preco: 'R$ 35,00',
      etiqueta: 'NOVO SERVIÇO',
      corEtiqueta: 'orange'
    },
    {
      id: 7,
      nome: 'Vacina HPV',
      preco: 'R$ 299,00',
      etiqueta: 'SERVIÇO EXCLUSIVO',
      corEtiqueta: 'red',
      icone: 'https://loja.sabin.com.br/skin/frontend/sabin/default/release/6d865f811cb7478325d4b615b32a20ea.svg'
    }
  ];

  const rolar = (direcao) => {
    const container = referenciaCarrossel.current;
    const deslocamento = 260;

    if (direcao === 'proximo' && indiceAtual < itensDestaque.length - 4) {
      setIndiceAtual(indiceAtual + 1);
      container.scrollLeft += deslocamento;
    } else if (direcao === 'anterior' && indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
      container.scrollLeft -= deslocamento;
    }
  };

  return (
    <section className="w-full bg-[#f8f9fc] mt-16 p-5 rounded-lg relative">
      <div className="max-w-[1108px] mx-auto">
        
        <h2 className="text-lg font-bold text-gray-800 uppercase relative mb-8 px-10">
          Em destaque
          <span className="absolute left-10 bottom-[-6px] w-[120px] h-[3px] bg-sabin-red rounded"></span>
        </h2>

        
        <div
          ref={referenciaCarrossel}
          className="flex gap-6 overflow-x-hidden px-10 scroll-smooth no-scrollbar"
          style={{ height: 'auto' }}
        >
          {itensDestaque.map((item) => (
            <div
              key={item.id}
              className="relative w-[234px] bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between items-center shrink-0 hover:-translate-y-1 transition"
            >
              {/* Ícone ou Etiqueta */}
              {item.icone && !item.etiqueta && (
                <div className="absolute w-9 h-9 bg-gray-100 rounded-tl-lg rounded-br-lg flex items-center justify-center top-0 left-0">
                  <img src={item.icone} alt="Ícone" className="w-5 h-5" />
                </div>
              )}

              {item.etiqueta && (
                <div className="absolute top-0 right-0">
                  <span className={`${item.corEtiqueta === 'orange' ? 'bg-orange-400' : 'bg-red-500'} text-white text-[10px] font-bold px-3 py-1 rounded-tr-lg rounded-bl-md`}>
                    {item.etiqueta}
                  </span>
                </div>
              )}

              {/* Nome */}
              <div className="w-full h-full flex items-center justify-center text-center">
                {item.nome ? (
                  <p className="text-base font-museo text-gray-800 leading-snug">{item.nome}</p>
                ) : (
                  <p className="text-sm text-red-500">Nome não disponível</p>
                )}
              </div>

              {/* Preço e ação */}
              <div className="flex justify-between items-end w-full mt-4">
                <div className="text-left">
                  {item.preco ? (
                    <p className="text-base font-bold text-gray-900">{item.preco}</p>
                  ) : (
                    <p className="text-sm text-red-500">Preço não disponível</p>
                  )}
                  {item.parcelas && (
                    <p className="text-xs text-gray-500 leading-tight">{item.parcelas}</p>
                  )}
                </div>
                <div className="w-10 h-10 bg-sabin-green rounded-full cursor-pointer hover:bg-green-600 flex items-center justify-center shrink-0 transition">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/72ddd775408239f5370d04922affcaa9.svg"
                    alt="Carrinho"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={() => rolar('anterior')}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center transition"
          disabled={indiceAtual === 0}
        >
          <span className="text-gray-600 text-xl">&lt;</span>
        </button>
        <button
          onClick={() => rolar('proximo')}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center transition"
          disabled={indiceAtual >= itensDestaque.length - 4}
        >
          <span className="text-gray-600 text-xl">&gt;</span>
        </button>

        {/* Dots de navegação */}
        <div className="flex justify-center gap-2 mt-3">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 border border-sabin-red rounded-full transition ${
                idx === indiceAtual ? 'bg-sabin-red' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdutosDestaque;