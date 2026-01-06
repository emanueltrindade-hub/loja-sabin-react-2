import React, { useState, useEffect } from 'react';

const CarrosselAutomatico = () => {
  const imagens = [
    'https://loja.sabin.com.br/media/banners/_/b/_banner_loja_tablet_1108x358px.jpg',
    'https://loja.sabin.com.br/media/banners/b/a/banner_1__1.jpg',
    'https://loja.sabin.com.br/media/banners/a/r/arexvy_tablete__1108x358__3.png',
    'https://loja.sabin.com.br/media/banners/b/a/banner_hz_setembro_mobile_-_576_x_290px_2.jpg',
    'https://loja.sabin.com.br/media/banners/i/n/infus_o_banner_loja_tablet_1.jpg',
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((anterior) => (anterior + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <article className="flex gap-6 h-[250px] mt-4">
      <div className="relative flex-1 overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
        >
          {imagens.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>

        
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {imagens.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full border border-sabin-red ${
                idx === indiceAtual ?  'bg-sabin-red' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>

    
      <a href="https://loja.sabin.com.br/entre? onboarding=true" className="w-[384px] shrink-0">
        <img
          src="https://loja.sabin.com.br/media/sabin_budgets/stores/1/upload_desktop.png"
          alt="Crie sua conta"
          className="w-full h-full object-cover rounded-2xl"
        />
      </a>
    </article>
  );
};

export default CarrosselAutomatico;