import { products } from '../data/products.js';

const ProductGallery = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-orange-500 pl-4">Ürünlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg text-slate-700">{product.name}</h3>
                <button className="mt-3 text-orange-600 font-semibold hover:text-orange-800 transition">Detayları Gör →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;