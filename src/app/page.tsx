import Image from 'next/image';


export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="rounded-full overflow-hidden w-60 h-60 mb-4">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={360}
            height={360}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Ata Berk Yılmaz</h1>
        <p className="text-center mb-4">I am a software developer experience in backend development and DevOps.</p>
        <footer className="mt-8 flex space-x-4">
          <a
            href="https://www.linkedin.com/in/ataberkyiilmaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </a>
          <a
            href="https://github.com/atayiilmaz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <Image src="/github.png" alt="GitHub" width={32} height={32} />
          </a>
        </footer>
      </div>
  );
}
