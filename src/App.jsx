import React from 'react';
import Header from './components/layout/Header';
import SignUpForm from './components/auth/SignupForm';
import BenefitsSection from './components/benefits/BenefitsSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          <SignUpForm />
          <BenefitsSection />
        </div>
      </main>
    </div>
  );
};

export default App;