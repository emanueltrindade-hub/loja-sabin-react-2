
const Navbar = () => {
  

  return (
    <nav className="sticky top-0 z-10 bg-[#F7F8FC] border-t border-b h-20">
      <div className="max-w-[1108px] mx-auto h-full flex items-center justify-between px-4">
        
        <a href="https://loja.sabin.com.br">
          <img
            src="https://loja.sabin.com.br/media/favicon/default/Logo_-_vermelha-4k.png"
            alt="Sabin"
            className="w-[85px]"
          />
        </a>

       
        <div className="relative flex-1 mx-8">
          <input
            type="text"
            placeholder="O que você procura?"
            className="w-full max-w-[442px] h-12 rounded-full border border-gray-200 pl-6 pr-16 outline-none"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-sabin-red hover:bg-red-600 text-white w-12 h-10 rounded-full flex items-center justify-center">
            <img
              src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/30bcd5374a562c97bff97bfcf4ae5433.svg"
              alt="Buscar"
              className="w-6"
            />
          </button>
        </div>

       
        <div className="flex items-center gap-4">
         
          <div className="text-right">
            <div className="text-sm font-semibold uppercase">ENTRE / CADASTRE-SE</div>
            <div className="text-xs text-gray-600 uppercase">MINHA CONTA</div>
          </div>
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/06d0a8a9765adcea98087831387e1073.svg"
            alt="Usuário"
            className="w-6"
          />
         
          <button className="p-1">
            <img
              src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/8b72f71ed3a9759e7c534bdd73675962.svg"
              alt="Menu"
              className="w-6"
            />
          </button>

          
          <div className="relative bg-sabin-red text-white rounded-b-lg px-4 py-2 text-center">
            <img
              src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/11a91bad46c265fb5d9e106769ae9508.jpg"
              alt="Carrinho"
              className="w-16 mx-auto"
            />
            <span className="absolute top-2 right-4 bg-gray-700 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
              0
            </span>
            <div className="text-xs font-bold mt-1">MINHAS<br />COMPRAS</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;