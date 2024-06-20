function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section className="max-w-4xl">
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Welcome!</h1>
      <p className="prose prose-neutral dark:prose-invert max-w-none">
        Hello! I'm Omar. I'm a Machine Learning Engineer with over three
        years of experience. I completed my undergraduate studies at
        École de technologie supérieure (ÉTS) in Montréal, Canada, and I'm
        currently pursuing a Master's degree with a focus on AI. Passionate
        about using AI to enhance and upgrade products. If you're interested in
        collaborating on innovative AI projects, feel free to reach out!
      </p>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-black dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/omar-solano-539a091b5/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:omarsolano27@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Email me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
