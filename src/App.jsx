import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AlertBanner from './components/AlertBanner';
import CarrosselAutomatico from './components/CarrosselAutomatico';
import CategoryCards from './components/CategoryCards';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import PopularServices from './components/PopularServices';
import NewsletterSection from './components/NewsletterSection';
import CertificationsSection from './components/SecaoDeCertificacoes';
import InfoNewsSection from './components/InfoNewsSection';
import ProdutosDestaque from './components/ProdutosDestaque';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      
      <main className="w-full max-w-[1108px] mx-auto px-4">
        <AlertBanner />
        <CarrosselAutomatico />
        <CategoryCards />
        <ProdutosDestaque />
        
        <section className="mt-16">
          <h3 className="text-base mb-4 text-gray-800 font-sans uppercase">
            Escolha nossos<br />produtos e serviços
          </h3>
          <div className="flex items-start max-w-[1108px]">
            <FilterSidebar />
            <ProductGrid />
          </div>
        </section>
      </main>
      
      <PopularServices />
      <NewsletterSection />
      <InfoNewsSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
}

export default App;