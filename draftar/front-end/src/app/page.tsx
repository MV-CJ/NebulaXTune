// front-end/app/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { fetchHomeContent } from '@/utils/api';

export default function Home() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchHomeContent();
        setContent(data);
      } catch (error) {
        console.error('Erro ao buscar conteúdo:', error);
      }
    };

    getContent();
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
