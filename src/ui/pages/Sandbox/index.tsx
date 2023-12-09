export default function Sandbox() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <a href="/" className="flex items-start justify-start gap-4 text-sm font-light text-blue-400 underline">
        &larr; home page
      </a>
      <h1>Sandbox Page</h1>
      <h6>This page will not appear in production</h6>
    </div>
  );
}
