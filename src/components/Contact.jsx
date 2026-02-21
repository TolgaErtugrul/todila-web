const Contact = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-orange-500 pl-4">İletişim</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-700 mb-2">📍 Adres</h3>
              <p className="text-slate-600">Örnek Mahallesi, Yalıtım Caddesi No:1, İstanbul/Türkiye</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-700 mb-2">📞 Telefon & E-posta</h3>
              <p className="text-slate-600">+90 212 000 00 00</p>
              <p className="text-slate-600">info@todila.com</p>
            </div>
          </div>

          {/* Google Maps - iframe ile en hızlı ve ücretsiz yöntem */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-inner border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.7932762524!2d28.80504521481198!3d41.00550051152865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1cc1e01f57f7531!2s%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;