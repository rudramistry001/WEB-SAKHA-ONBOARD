import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs'
import Onboard from './pages/Onboard';
import TermsAndConditions from './pages/TermsConditions';
import { Toaster } from 'react-hot-toast';

function App() {

  useEffect(() => {
    document.documentElement.classList.add('dark'); // Force dark mode
  }, []);



  return (
    <div className="bg-gray-900 text-white min-h-screen"> {/* Optional: set base background/text color */}
      <Toaster />
      <Router>
        <Routes>
          {/*
            This route now directly navigates to /onboard when the base URL (/) is accessed.
            The LoadingScreen will no longer be displayed on the initial load of the base URL.
          */}
          <Route path="/" element={<Onboard />} />

          {/* Other routes remain unchanged */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
