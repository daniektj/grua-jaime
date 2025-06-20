import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <h1 className="text-4xl font-bold text-center">
          Grua Gato Bronco
        </h1>
        <Image
          className="rounded-[24px]"
          src="/grua-jaime.jpg"
          alt="Next.js logo"
          width={600}
          height={357}
          priority
        />
        <h3 className="text-center text-2xl">
          Contacto: +52 (663) 373 9427
        </h3>



      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.coderlabs.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/logo-coderlabs.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          CoderLabs
        </a>
        
      </footer>
    </div>
  );
}
