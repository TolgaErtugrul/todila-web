import Navbar from './components/Navbar';
import ProductGallery from './components/ProductGallery';
import TechnicalDocs from './components/TechnicalDocs';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <ProductGallery />
        <TechnicalDocs />
      </main>
    </div>
  );
}

export default App;