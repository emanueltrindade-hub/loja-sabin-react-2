import React from 'react';

const CertificationsSection = () => {
  return (
    <section
      id="selos"
      className="flex justify-center py-8 bg-white border-t border-gray-200 w-full max-w-[1108px] mx-auto h-[114px]"
    >
      <div className="flex justify-center items-center gap-20">
        <div className="text-gray-600">
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/494b0112d3cef4417c14b27d431aae08.jpg"
            className="w-[173px] h-[35px]"
          />
        </div>
        <div className="text-gray-600">
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/0fc7c98ab5c2af84645a728f6086a157.png"
            className="w-[137px] h-[45px]"
          />
        </div>
        <div className="text-gray-600">
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/58571f92b716ff19552ac24e63f109a2.png"
            className="w-[130px] h-[35px]"
          />
        </div>
        <div className="text-gray-600">
          <img
            src="https://loja.sabin.com.br/skin/frontend/sabin/default/release/cdb1aff2161b741da43effc75da1ca9b.png"
            className="w-[137px] h-[47px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;