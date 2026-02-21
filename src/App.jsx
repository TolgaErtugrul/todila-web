import Navbar from './components/Navbar';
import ProductGallery from './components/ProductGallery';
import TechnicalDocs from './components/TechnicalDocs';
import Applications from './components/Applications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Hero Section - Karşılama */}
      <header className="bg-slate-800 py-20 text-center">
        <h1 className="text-5xl font-black text-white mb-4">TODİLA</h1>
        <p className="text-orange-500 text-xl font-medium tracking-widest uppercase">İnşaat & Yalıtım Teknolojileri</p>
      </header>

      <main>
        <section id="products"><ProductGallery /></section>
        <section id="apps"><Applications /></section>
        <section id="docs"><TechnicalDocs /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="bg-slate-800 text-slate-400 py-8 text-center border-t border-slate-700">
        <p>© 2026 Todila. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;