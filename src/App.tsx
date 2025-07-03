import React from 'react';
import TelegramLoginButton from './components/TelegramLoginButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">🔐 Telegram JWT Auth</h1>
        <p className="text-gray-400 mb-6">
          Use your Telegram account to securely log in.
        </p>

        {/* Telegram Widget Login */}
        <TelegramLoginButton />

        <footer className="mt-10 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Telegram Auth Demo
        </footer>
      </div>
    </div>
  );
};

export default App;
