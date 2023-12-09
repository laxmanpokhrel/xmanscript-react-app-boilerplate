function Home(): JSX.Element {
  return (
    <div className="home-page-template flex h-screen w-screen select-none flex-col gap-4 bg-black tracking-wider text-white">
      <div className="cover m-auto flex w-[70%] flex-col gap-1">
        <h1 className="text-2xl first-letter:text-8xl">
          Hi developer, I am your React boilerplate with Vite and TS -
          <p className="inline bg-[#FFDC1C] px-1 text-center font-bold text-black">minimal</p>
        </h1>
        <p className="text-2xl font-thin">Ready to dive deeper into my features?</p>
        <div className="flex items-start justify-start gap-4 text-xl font-light text-[#4b4a46]">
          Checkout my readme.md file
        </div>
        <a href="/sandbox" className=" flex items-start justify-start gap-4 text-sm font-light text-blue-400 underline">
          sandbox page &rarr;
        </a>
      </div>
    </div>
  );
}

export default Home;
