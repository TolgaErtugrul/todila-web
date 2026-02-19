import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold text-orange-500">TODILA</div>
      <div className="space-x-6 flex items-center">
        <a href="#" className="hover:text-orange-400 transition">{t('products')}</a>
        <a href="#" className="hover:text-orange-400 transition">Kurumsal</a>
        <a href="#" className="hover:text-orange-400 transition">İletişim</a>
        <button 
          onClick={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
          className="bg-orange-600 px-3 py-1 rounded text-sm font-bold uppercase"
        >
          {i18n.language === 'tr' ? 'EN' : 'TR'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;