export const onTelegramAuth = async (user: any) => {
    console.log("✅ Telegram user received:", user);
  
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/telegram`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (response.ok && data.token) {
        console.log("🔐 JWT Token:", data.token);
        localStorage.setItem("jwtToken", data.token);
        alert("✅ Successfully authenticated via Telegram!");
      } else {
        console.error("❌ Authentication failed:", data.message || data);
        alert("❌ Authentication failed!");
      }
    } catch (error) {
      console.error("🚨 Auth error:", error);
      alert("❌ An error occurred while authenticating.");
    }
  };
  