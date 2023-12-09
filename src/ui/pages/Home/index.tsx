import { hasErrorBoundary } from '@xmanscript/has-error-boundary';

function Home(): JSX.Element {
  return (
    <div className="home-page-template naxatw-flex naxatw-gap-4 naxatw-tracking-wider naxatw-flex-col naxatw-w-screen naxatw-h-screen naxatw-bg-black naxatw-text-white naxatw-select-none">
      <div className="cover naxatw-w-[70%] naxatw-m-auto naxatw-flex naxatw-flex-col naxatw-gap-1">
        <h1 className="first-letter:naxatw-text-8xl naxatw-text-2xl">
          Hi developer, I am your React Starter Kit -
          <p className="naxatw-bg-[#FFDC1C] naxatw-text-center naxatw-px-1 naxatw-inline naxatw-text-black naxatw-font-bold">
            version-2.1
          </p>
        </h1>
        <p className="naxatw-text-2xl naxatw-font-thin">Ready to dive deeper into my features?</p>
        <div className="naxatw-text-[#FFDC1C] naxatw-font-light naxatw-text-xl naxatw-flex naxatw-justify-start naxatw-items-start naxatw-gap-4">
          Checkout my readme.md file
        </div>
        <a
          href="/sandbox"
          className="naxatw-text-blue-400 naxatw-font-light naxatw-text-sm naxatw-underline naxatw-flex naxatw-justify-start naxatw-items-start naxatw-gap-4"
        >
          sandbox page &rarr;
        </a>
      </div>
    </div>
  );
}

export default hasErrorBoundary(Home);
