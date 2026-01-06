import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F7F8FC] flex justify-center items-center border-t border-gray-200 text-black py-[22px]">
      <p className="text-center text-[16px] text-black font-'Museo Sans Rounded' leading-[26px] [word-spacing:4px]">
        Sabin Medicina Diagnóstica - CNPJ - 00.718.528/0001-09
        <br />
        <a className="underline">Termos de Consentimento</a>{" "}
        <a className="underline">Política de Privacidade</a>{" "}
        <a className="underline">Mapa do Site</a>
      </p>
    </footer>
  );
};

export default Footer;