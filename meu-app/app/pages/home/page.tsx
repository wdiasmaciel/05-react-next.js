'use client'

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const estiloDoBotao = "w-full py-3 my-3 rounded-lg text-white bg-blue-700";

  return (
    <main className="m-4 p-4 border border-green-500">
      <h1>Home</h1>
      <button className={estiloDoBotao} onClick={() => router.push('./login')}>Ir para a página de Login</button>
      <button className={estiloDoBotao} onClick={() => router.push('./cadastro')}>Ir para a página de Cadastro</button>
      <button className={estiloDoBotao} onClick={() => router.push('/')}>Ir para a página inicial</button>
    </main>
  );
}
