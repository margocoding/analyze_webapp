'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-2xl mb-4 shadow-lg shadow-blue-500/25 animate-pulse">
          M
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">Перенаправление...</p>
      </div>
    </div>
  );
}
