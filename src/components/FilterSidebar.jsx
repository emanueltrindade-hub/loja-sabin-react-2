import React from 'react';

const FilterSidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 p-2 rounded-lg shadow shrink-0">
      <h3 className="font-bold text-sabin-red text-lg mb-4 px-4">Filtrar e organizar</h3>

      
      <div className="mb-6 bg-white rounded-md border p-4">
        <div className="flex items-center mb-2">
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/6d865f811cb7478325d4b615b32a20ea.svg"
            alt="Vacinas"
            className="w-4 h-4 mr-2"
          />
          <h4 className="uppercase text-sm font-semibold">Vacinas</h4>
        </div>
        <div className="flex mb-2">
          <div className="bg-sabin-red w-14 h-[2px]"></div>
          <div className="bg-gray-300 flex-1 h-[2px]"></div>
        </div>
        <label className="block mb-2 text-sm">
          <input type="checkbox" className="mr-2" />
          Gripe
        </label>
        <label className="block mb-2 text-sm">
          <input type="checkbox" className="mr-2" />
          HPV
        </label>
        <label className="block text-sm">
          <input type="checkbox" className="mr-2" />
          Febre Amarela
        </label>
      </div>

    
      <div className="bg-white rounded-md p-4 border">
        <div className="flex items-center mb-2">
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/775b0ad4036e05f25346268a2f26b13e.svg"
            alt="Exames"
            className="w-4 h-4 mr-2"
          />
          <h4 className="uppercase text-sm font-semibold">Exames Laboratoriais</h4>
        </div>
        <div className="flex mb-2">
          <div className="bg-sabin-red w-14 h-[2px]"></div>
          <div className="bg-gray-300 flex-1 h-[2px]"></div>
        </div>
        <label className="block mb-2 text-sm">
          <input type="checkbox" className="mr-2" />
          Hemograma
        </label>
        <label className="block mb-2 text-sm">
          <input type="checkbox" className="mr-2" />
          Colesterol
        </label>
        <label className="block text-sm">
          <input type="checkbox" className="mr-2" />
          Glicose
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;