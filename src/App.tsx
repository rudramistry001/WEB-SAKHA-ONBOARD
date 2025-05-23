import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactUs from './pages/ContactUs'
import Onboard from './pages/Onboard';
import LoadingScreen from './pages/LoadingScreen';
import TermsAndConditions from './pages/TermsConditions';
import { Toaster } from 'react-hot-toast';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark'); // Force dark mode
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-900 text-white"> {/* Optional: set base background/text color */}
      <Toaster />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              isLoading ? (
                <LoadingScreen onLoadingComplete={handleLoadingComplete} />
              ) : (
                <Navigate to="/onboard" replace />
              )
            } 
          />
          <Route path="/onboard" element={<Onboard />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;