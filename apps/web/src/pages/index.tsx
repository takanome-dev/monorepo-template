import Head from 'next/head';
import { Button, Card } from 'ui';

const CARD_CONTENT = [
  {
    title: 'Caching Tasks',
    href: 'https://turbo.build/repo/docs/core-concepts/caching',
    cta: 'Read More',
  },
  {
    title: 'Running Tasks',
    href: 'https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks',
    cta: 'Read More',
  },
  {
    title: 'Configuration Options',
    href: 'https://turbo.build/repo/docs/reference/configuration',
    cta: 'Read More',
  },
];

export default function Home(props: { message?: string; error?: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div
          className={`mb-4 flex items-center justify-center gap-4 rounded-lg border p-4 ${
            props?.message ? 'border-green-500' : 'border-red-500'
          }`}
        >
          <span
            className={`h-4 w-4 rounded-full ${
              props?.message ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <p className="text-lg text-slate-50">
            {props?.message ?? props?.error}
          </p>
        </div>
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text px-2 text-transparent">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>

        <div className="mt-12 grid grid-cols-1 place-content-evenly gap-4 sm:grid-cols-3">
          {CARD_CONTENT.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000');
    const data = (await res.json()) as { message: string };
    return {
      props: {
        message: data.message,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: 'Error, the server is not running or is not reachable 🛑',
      },
    };
  }
};
