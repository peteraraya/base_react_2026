import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { useUIStore } from '@/stores/uiStore';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

const HIRE_ME_CODE = 'hireme'.split('');
const RETRO_CODE = '1998'.split('');

export const useEasterEgg = () => {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [hireMeIndex, setHireMeIndex] = useState(0);
  const [retroIndex, setRetroIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami Check
      if (e.key === KONAMI_CODE[konamiIndex]) {
        if (konamiIndex === KONAMI_CODE.length - 1) {
          triggerConfetti('¡Código Konami activado! 🎮');
          setKonamiIndex(0);
        } else {
          setKonamiIndex(konamiIndex + 1);
        }
      } else {
        setKonamiIndex(0);
      }

      // Hire Me Check
      if (e.key.toLowerCase() === HIRE_ME_CODE[hireMeIndex]) {
        if (hireMeIndex === HIRE_ME_CODE.length - 1) {
          triggerConfetti('¡Has descubierto el secreto! 🚀 ¡Hablemos!');
          setHireMeIndex(0);
        } else {
          setHireMeIndex(hireMeIndex + 1);
        }
      } else {
        setHireMeIndex(0);
      }

      // Retro Mode Check
      if (e.key === RETRO_CODE[retroIndex]) {
        if (retroIndex === RETRO_CODE.length - 1) {
          const store = useUIStore.getState();
          store.setRetroMode(!store.isRetroMode);
          useUIStore.getState().addToast(
            store.isRetroMode ? 'Regresando al 2026...' : '¡Viajando a 1998! 💾', 
            'info'
          );
          setRetroIndex(0);
        } else {
          setRetroIndex(retroIndex + 1);
        }
      } else {
        setRetroIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, hireMeIndex, retroIndex]);
};

const triggerConfetti = (message: string) => {
  useUIStore.getState().addToast(message, 'success');
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};
