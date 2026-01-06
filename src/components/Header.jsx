import React, { useState } from 'react';

const Header = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState('Brasília - DF');

  const estado = [
    'Brasília - DF', 'Goiás - GO', 'Mato Grosso', 'Mato Grosso do Sul',
    'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco',
    'Piauí', 'Rio Grande do Norte', 'Sergipe', 'Acre', 'Amapá',
    'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins',
    'Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'
  ];

  return (
    <header className="w-full max-w-[1108px] mx-auto bg-white px-4 py-2 md:mt-[100px]">
      <div className="flex items-center justify-between">
        {/* Links Desktop */}
        <div className="flex gap-x-6 md:hidden">
          <a href="https://sabin.com.br/unidade/brasilia-df/" className="text-xs hover:text-sabin-red">
            PORTAL SABIN
          </a>
          <a href="https://laudos.sabin.com.br" className="text-xs hover:text-sabin-red">
            RESULTADO DE EXAMES
          </a>
          <a href="https://blog.sabin.com.br/" className="text-xs hover:text-sabin-red">
            IR PARA O BLOG
          </a>
        </div>

        {/* Seletor de Estado */}
        <div className="flex items-center text-white bg-[#5C5F69] rounded-full px-4 py-1">
          <span className="text-sm mr-2">Você está em</span>
          <select
            value={estadoSelecionado}
            onChange={(e) => setEstadoSelecionado(e.target.value)}
            className="bg-transparent text-sm cursor-pointer outline-none"
          >
            {estado.map((estado) => (
              <option key={estado} value={estado}>{estado}</option>
            ))}
          </select>
        </div>

        {/* Ícones de Acessibilidade */}
        <div className="flex items-center gap-4">
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/10b294aa1d728b6901fa9c1834bcb9fc.svg"
            alt="Contraste"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/2e7b01942021ff8be164fa7aac29d108.svg"
            alt="Libras"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;