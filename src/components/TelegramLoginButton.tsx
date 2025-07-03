import React, { useEffect } from 'react';

// Define expected Telegram user type
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

// Declare global callback so Telegram widget can use it
declare global {
  interface Window {
    handleTelegramLogin: (user: TelegramUser) => void;
  }
}

const TelegramLoginButton: React.FC = () => {
  useEffect(() => {
    // Define the callback function globally
    window.handleTelegramLogin = async (user: TelegramUser) => {
      console.log("✅ Telegram user:", user);

      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/telegram`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });

        const data = await response.json();
        if (data.token) {
          localStorage.setItem('jwt_token', data.token);
          alert('✅ Logged in successfully!');
        } else {
          alert('❌ Login failed. No token received.');
        }
      } catch (err) {
        console.error('❌ Error logging in:', err);
      }
    };

    // Inject the Telegram Login widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.async = true;
    script.setAttribute('data-telegram-login', import.meta.env.VITE_TELEGRAM_BOT_USERNAME || '');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'true');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'handleTelegramLogin');

    const container = document.getElementById('telegram-login-button');
    if (container) {
      container.innerHTML = ''; // clear if already rendered
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return <div id="telegram-login-button" className="mt-6 text-center" />;
};

export default TelegramLoginButton;
