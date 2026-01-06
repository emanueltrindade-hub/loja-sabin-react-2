import React from 'react';

const InfoNewsSection = () => {
  return (
    <section
      id="infonews"
      className="h-[250px] pt-[14px] px-[92px] bg-gray-50 text-gray-800 mt-[110px]"
    >
      <div
        id="gradeInferior"
        className="flex justify-between items-center gap-10 text-left text-[18px] max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-4 gap-10">
          <div className="h-[202px] w-[182px] text-[16px]">
            <ul className="space-y-3 space-x-0">
              <li className="flex items-center gap-2">
                <img
                  src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/c37e454497277db8745e718cd389f469.svg"
                  className="w-6"
                  alt=""
                />
                <span>
                  <strong>Exames Covid-19</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/07da5cdde123277992841621b39454b1.svg"
                  className="w-6"
                  alt=""
                />
                <span>
                  <strong>Exames Laboratoriais</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/7c886680e0e43b715714f05881da141f.svg"
                  className="w-6"
                  alt=""
                />
                <span>
                  <strong>Vacinas</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/7c886680e0e43b715714f05881da141f.svg"
                  className="w-6"
                  alt=""
                />
                <span>
                  <strong>Pacotes infantis</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="h-[141px] w-[186px] text-[14px] leading-6">
            <ul className="space-y-2">
              <li>
                <a href="#" className="underline">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Nossas Unidades
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div className="h-[159px] w-[233px] justify-center items-left">
            <h4 className="font-'Museo Sans Rounded' font-semibold text-[14px] mb-3">
              Baixe nosso aplicativo
            </h4>
            <a href="#" className="block mb-3">
              <img
                src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/81a8a6c8eca32b7034d492ee7579f41d.svg"
                alt="App Store"
                className="w-[163px]"
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/bbc9caa962f14ccef7217cfc696f4b79.svg"
                alt="Google Play"
                className="w-[163px]"
              />
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-2">Contato:</h4>
            <p className="text-sm font-semibold mb-4">(61) 3329-8000</p>

            <div className="flex flex-col gap-3 mt-2 w-[260px] h-[64px]">
              <h4 className="font-bold text-[12px] text-'Roboto'">
                Nossas redes:
              </h4>

              <div className="flex gap-1 w-[258px]">
                <a href="#">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/351732e41d43842319969b45c4a49cbc.svg"
                    className="w-5"
                    alt="Instagram"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/79eb207d4ef73e5e0a6e468dc440cd7f.svg"
                    className="w-5"
                    alt="Facebook"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/54409d8e1020532d6df505616c0c7dbb.svg"
                    className="w-5"
                    alt="Linkedin"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/b4400c9936041745ec3ee70716fd1b69.svg"
                    className="w-5"
                    alt="YouTube"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/edff8810323965ea12c5c947d2e892e2.svg"
                    className="w-5"
                    alt="x"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/95d21f4a3ed5f528b50d8ef9db5a0533.svg"
                    className="w-5"
                    alt="Spotify"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/fb448e0a6790375ac6658606ee922444.svg"
                    className="w-5"
                    alt="Tiktok"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoNewsSection;