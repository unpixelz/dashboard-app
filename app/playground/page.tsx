'use client'; // Wichtig für Next.js App Router, da wir Hooks nutzen

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Optional: Für Redirect nach dem Video

export default function LoginPage() {
  const [isLoginStarted, setIsLoginStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. UI State ändern (Inputs ausblenden)
    setIsLoginStarted(true);

    // 2. Video abspielen (Startet den Hintergrund-Effekt)
    if (videoRef.current) {
      videoRef.current.play();
      // Optional: Sound einschalten, falls gewünscht
      // videoRef.current.muted = false; 
    }

    // 3. Simuliere Login-Logik oder warte auf API
    // Hier könntest du z.B. 3 Sekunden warten (Länge des Videos) und dann weiterleiten
    setTimeout(() => {
       console.log("Login fertig, leite weiter...");
       // router.push('/dashboard'); 
    }, 4000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* --- HINTERGRUND VIDEO --- */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 
          ${isLoginStarted ? 'brightness-100 scale-105' : 'brightness-50 scale-100'}`}
        // Das Video ist initial pausiert (oder loopend, je nach Wunsch).
        // Hier: Pausiert, bis Button geklickt wird.
        src="/assets/login-background.mp4" 
        poster="/assets/login-poster.jpg"
        playsInline
        muted // Muted ist oft notwendig, damit Autoplay-Policies nicht greifen, falls du es sofort starten willst
      />

      {/* --- INHALT OVERLAY --- */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        
        {/* Container für Formular-Elemente */}
        <div 
          className={`flex w-full max-w-md flex-col items-center gap-6 p-8 transition-all duration-700 ease-in-out
            ${isLoginStarted ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}
          `}
        >
          <h1 className="text-4xl font-bold text-white tracking-wider">WELCOME</h1>
          
          <form onSubmit={handleLogin} className="flex w-full flex-col gap-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full rounded-lg bg-white/10 p-4 text-white placeholder-gray-300 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              required
            />
            <input 
              type="password" 
              placeholder="Passwort" 
              className="w-full rounded-lg bg-white/10 p-4 text-white placeholder-gray-300 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              required
            />
            
            <button 
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-600 p-4 font-semibold text-white hover:bg-blue-500 transition-transform active:scale-95 shadow-lg shadow-blue-900/50"
            >
              Enter System
            </button>
          </form>
        </div>

        {/* Optional: Lade-Indikator, der erscheint, wenn Inputs weg sind */}
        <div className={`absolute transition-all duration-1000 delay-500 ${isLoginStarted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-xl tracking-widest animate-pulse">
            ACCESSING...
          </div>
        </div>

      </div>
    </div>
  );
}