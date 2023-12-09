import Querytest from './Querytest';

export default function Sandbox() {
  return (
    <div className="naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-p-6">
      <a
        href="/"
        className="naxatw-text-blue-400 naxatw-font-light naxatw-text-sm naxatw-underline naxatw-flex naxatw-justify-start naxatw-items-start naxatw-gap-4"
      >
        &larr; home page
      </a>
      <h1>Sandbox Page</h1>
      <h6>This page will not appear in production</h6>
      <Querytest />
    </div>
  );
}
