const Applications = () => {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Uygulama Örnekleri</h2>
        <p className="text-slate-400 mb-8 max-w-2xl">Todila ürünlerinin sahada nasıl uygulandığına dair referans projelerimizden görüntüler.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square bg-slate-800 rounded-lg overflow-hidden group">
              <img 
                src={`https://via.placeholder.com/400?text=Uygulama+${item}`} 
                alt="Uygulama" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;