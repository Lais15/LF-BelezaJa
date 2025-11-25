import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import ProfessionalProfile from './pages/ProfessionalProfile';
import Dashboard from './pages/Dashboard';
import { UserType, UserState } from './types';
import { Toaster } from 'react-hot-toast';

// Wrapper to conditionally hide navbar if needed, or handle layout
const Layout: React.FC<{ children: React.ReactNode, user: UserState, setUser: (u: UserState) => void }> = ({ children, user, setUser }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar user={user} setUser={setUser} />
      <main className="flex-grow">
        {children}
      </main>
      <Toaster position="bottom-center" />
    </div>
  );
};

const App: React.FC = () => {
  const [user, setUser] = useState<UserState>({
    type: UserType.CLIENT,
    name: 'Julia Client',
    location: null
  });

  return (
    <HashRouter>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/professional/:id" element={<ProfessionalProfile />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;