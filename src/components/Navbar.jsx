import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Yumuşak kaydırma fonksiyonu
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-800/95 backdrop-blur-sm text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold text-orange-500 cursor-pointer" onClick={(e) => scrollToSection(e, 'hero')}>TODILA</div>
      
      <div className="hidden md:flex space-x-6 items-center">
        <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-orange-400 transition">Ürünler</a>
        <a href="#apps" onClick={(e) => scrollToSection(e, 'apps')} className="hover:text-orange-400 transition">Uygulamalar</a>
        <a href="#docs" onClick={(e) => scrollToSection(e, 'docs')} className="hover:text-orange-400 transition">Teknik Dokümanlar</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-orange-400 transition">İletişim</a>
        
        <button 
          onClick={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
          className="ml-4 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-sm font-bold uppercase transition"
        >
          {i18n.language === 'tr' ? 'EN' : 'TR'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;