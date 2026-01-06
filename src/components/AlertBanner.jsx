import React, { useState } from 'react';

const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section className="bg-[#ede5f2] border border-sabin-purple rounded-lg p-6 flex justify-between items-center mt-8">
      <div className="flex items-center gap-4">
        <img
          src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/0e8af05917ffd98754cd39ef4a4448fd.svg"
          alt="Aviso"
          className="w-9 h-9"
        />
        <p className="text-gray-700 text-base">
          <strong>Fique atento!</strong><br />
          O Grupo Sabin alerta que <strong>não envia</strong> links para download de aplicativos,
          não solicita dados pessoais, bancários, senhas ou participação em sorteios.
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="flex items-center gap-2 hover:opacity-80"
      >
        <span className="font-bold text-sm">Fechar</span>
        <img
          src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/037d4cc56f169b77206a1aa5f0b12f61.svg"
          alt="Fechar"
          className="w-10"
        />
      </button>
    </section>
  );
};

export default AlertBanner;