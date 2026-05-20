'use client'

import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const estiloDoBotao = "w-full py-3 my-3 rounded-lg text-white bg-blue-700";

  return (
    <main className="m-4 p-4 border border-red-500">
      <h1>Login</h1>
      <button className={estiloDoBotao} onClick={() => router.push('/')}>Ir para a página inicial</button>
    </main>
  );
}
