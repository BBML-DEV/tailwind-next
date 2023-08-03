export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-100 text-center dark:bg-slate-900 dark:text-slate-50">
      <div className="max-w-2xl">
        <h1 className="mt-8 flex flex-row items-center text-5xl font-bold text-slate-950 before:flex before:h-40 before:w-2 before:bg-sky-500 dark:text-slate-50">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-8">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <button className="mt-8 rounded-md bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-600">
          Get started
        </button>
      </div>
    </div>
  )
}
