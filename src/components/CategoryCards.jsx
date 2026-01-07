

const CategoryCards = () => {
  const categorias = [
    {
      titulo: 'VACINAS',
      image: 'https://loja.sabin.com.br/media/widgetsimages/v/a/vacinas.png',
    },
    {
      titulo:  'VACINAS PARA CRIANÇAS',
      image: 'https://loja.sabin.com.br/media/widgetsimages/v/a/vacinas_pra_crian_as.png',
    },
    {
      titulo: 'TESTES GENÉTICOS',
      image: 'https://loja.sabin.com.br/media/widgetsimages/t/e/teste_geneticos.png',
    },
    {
      titulo: 'CHECK-UPS',
      image:  'https://loja.sabin.com.br/media/widgetsimages/c/h/check_up_banner_destaque_loja___categorias_conversa_o___530_x_220px.png',
    },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-center mb-6">O que você precisa, o Sabin tem: </h3>
      <div className="grid grid-cols-4 gap-6">
        {categorias.map((cat, idx) => (
          <div
            key={idx}
            className="relative h-28 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-2xl transition overflow-hidden cursor-pointer"
          >
            <img src={cat.image} alt={cat.titulo} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full p-5 bg-gradient-to-b from-black/50 to-transparent">
              <p className="text-white font-bold text-sm">{cat.titulo}</p>
              <div className="h-1 w-1/4 bg-sabin-red mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;