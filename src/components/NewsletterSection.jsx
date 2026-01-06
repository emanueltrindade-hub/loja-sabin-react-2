import React from 'react';

const NewsletterSection = () => {
  return (
    <section id="news" className="h-[340px] py-4 bg-gray-50 text-gray-800 mt-[110px]">
      <div className="text-center">
        <img
          id="envelope"
          src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/78e0ed30e2697301a54397c3e3007a63.svg"
          alt="envelope"
          className="mx-auto justify-center"
        />
        <h2 className="text-xl font-bold mb-3">SUA SAÚDE É A NOSSA PRIORIDADE</h2>
        <p className="text-sm mb-6">
          Assine o nosso boletim informativo e receba ofertas, dicas de saúde e muito mais.
        </p>

        <form className="flex justify-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="px-4 py-2 rounded-full border border-gray-300 w-[250px] focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Seu melhor email"
            className="px-4 py-2 rounded-full border border-gray-300 w-[250px] focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-1 bg-red-500 hover:bg-red-600 text-[14px] text-white font-semibold rounded-full w-[120px] px-6 py-2 transition"
          >
            ASSINAR
            <img
              src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/481de3b8622cf90d94450f4019359916.svg"
              alt="seta"
            />
          </button>
        </form>
        <p className="text-gray-500 mb-12 text-[14px]">
          Ao se cadastrar você concorda em receber nossos e-mails conforme a nossa
          <a href="#" className="underline hover:text-red-600">política de privacidade</a>.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;