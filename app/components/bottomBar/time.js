// components/bottomBar/BottomBar.jsx
'use client';
import { Suspense, useEffect } from 'react';
import { useHydration } from '@/app/hooks/useHydration';
import useFaisalabadTime from '@/app/hooks/useTime';
import './bottomBar.sass';

const Time = () => {
  const faisalabadTime = useFaisalabadTime();
  const hydrated = useHydration();

  return (
    <Suspense fallback={null}>
      <time>{faisalabadTime}</time>
    </Suspense>
  );
};

export default Time;
