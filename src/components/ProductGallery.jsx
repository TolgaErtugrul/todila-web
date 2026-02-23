import { products } from '../data/products';
import { useTranslation } from 'react-i18next';

const ProductGallery = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Ürünler & Çözümler</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name[lang]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{product.name[lang]}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {product.description[lang]}
                </p>
                <button className="flex items-center text-orange-600 font-bold hover:gap-2 transition-all">
                  TEKNİK DETAY <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;