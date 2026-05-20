'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function PaginaInicial() {
  const router = useRouter();
  const estiloDoBotao = "w-full py-3 my-3 rounded-lg text-white bg-blue-700";

  return (
    <main className="m-4 p-4 border border-blue-500">
      <div className="flex items-center justify-start w-60 h-14">
        <Image
          className="object-contain border mr-1"
          src="/logo.png"
          alt="Logo do meu aplicativo"
          width={50}
          height={40}
        />
        <h1 className="text-lg font-semibold">Página Inicial</h1>
      </div>

      <button className={estiloDoBotao} onClick={() => router.push('./pages/login')}>Ir para a página de Login</button>
      <button className={estiloDoBotao} onClick={() => router.push('./pages/cadastro')}>Ir para a página de Cadastro</button>
      <button className={estiloDoBotao} onClick={() => router.push('./pages/home')}>Ir para a página Home</button>
    </main>
  );
}
