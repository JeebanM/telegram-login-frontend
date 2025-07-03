import React from 'react';
import TelegramLoginButton from './components/TelegramLoginButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">🔐 Login with Telegram</h1>
      <p className="text-gray-400 mb-4">Authenticate using your Telegram account</p>
      <TelegramLoginButton />
    </div>
  );
}

export default App;
