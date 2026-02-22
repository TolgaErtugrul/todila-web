import Navbar from './components/Navbar';
import ProductGallery from './components/ProductGallery';
import TechnicalDocs from './components/TechnicalDocs';
import Applications from './components/Applications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* id="hero" ve pt-20 (padding-top) eklendi */}
      <header id="hero" className="bg-slate-800 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-black text-white mb-4">TODİLA</h1>
        <p className="text-orange-500 text-xl font-medium tracking-widest uppercase">İnşaat & Yalıtım Teknolojileri</p>
      </header>

      <main>
        {/* Bileşenlerin etrafındaki section id'leri zaten bir önceki adımda eklemiştik */}
        <section id="products"><ProductGallery /></section>
        <section id="apps"><Applications /></section>
        <section id="docs"><TechnicalDocs /></section>
        <section id="contact"><Contact /></section>
      </main>
      
      {/* ... footer */}
    </div>
  );
}

export default App;