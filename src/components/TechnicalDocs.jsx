const TechnicalDocs = () => {
  const docs = {
    testReports: ["Rapor 1", "Rapor 2", "Rapor 3", "Rapor 4"],
    qualityCertificates: ["Belge 1", "Belge 2", "Belge 3", "Belge 4", "Belge 5"],
    technicalTables: Array.from({ length: 17 }, (_, i) => `Teknik Tablo ${i + 1}`)
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Teknik Dokümanlar</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kalite Belgeleri */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-500">
            <h3 className="text-xl font-bold mb-4 text-slate-700 uppercase">Kalite Belgeleri (5)</h3>
            <ul className="space-y-2">
              {docs.qualityCertificates.map((doc, i) => (
                <li key={i} className="flex items-center text-slate-600 hover:text-orange-600 cursor-pointer">
                  <span className="mr-2">📄</span> {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Test Raporları */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-600">
            <h3 className="text-xl font-bold mb-4 text-slate-700 uppercase">Test Raporları (4)</h3>
            <ul className="space-y-2">
              {docs.testReports.map((doc, i) => (
                <li key={i} className="flex items-center text-slate-600 hover:text-blue-600 cursor-pointer">
                  <span className="mr-2">📊</span> {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Teknik Tablolar */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-slate-800">
            <h3 className="text-xl font-bold mb-4 text-slate-700 uppercase">Teknik Tablolar (17)</h3>
            <div className="h-64 overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-2">
                {docs.technicalTables.map((doc, i) => (
                  <li key={i} className="flex items-center text-slate-600 hover:text-slate-900 cursor-pointer">
                    <span className="mr-2">📉</span> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDocs;