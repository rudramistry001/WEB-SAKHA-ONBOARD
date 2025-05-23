import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactUs from './pages/ContactUs'
import Onboard from './pages/Onboard';
import TermsAndConditions from './pages/TermsConditions';
import { Toaster } from 'react-hot-toast';

function App() {
  // isLoading state and handleLoadingComplete are no longer directly used for the root path navigation
  // but are kept here in case LoadingScreen is used in other contexts or for future enhancements.


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
          <Route path="/" element={<Navigate to="/onboard" replace />} />

          {/* Other routes remain unchanged */}
          <Route path="/onboard" element={<Onboard />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/*
            If you still need the LoadingScreen for specific scenarios (e.g.,
            before content loads on other pages, or as a global overlay),
            you would integrate it differently, perhaps within individual
            components or as a conditional render around the Router.
          */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
