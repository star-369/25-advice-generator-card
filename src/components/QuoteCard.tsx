interface Props {
  quote: string;
  id: number;
  onNewQuote: () => void;
}

export default function QuoteCard({ quote, id, onNewQuote }: Props) {
  return (
    <>
      <main className="w-[350px] xl:w-[650px] xl:p-10 text-light-cyan font-manrope pt-6 pb-12 px-4 rounded-md text-center bg-dark-grayish-blue relative ">
        <p className="text-[0.5rem] tracking-[0.1rem] text-neon-green font-extrabold xl:text-[0.75rem]">
          ADVICE #{id}
        </p>
        <h1 className="my-6 text-[28px]">"{quote}"</h1>

        {/* mobile divider */}
        <svg
          className="mx-auto mobile xl:hidden"
          width="295"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>

        {/* desktop divider */}
        <svg
          className="hidden mx-auto my-8 desktop xl:block"
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>

        <button
          className="absolute transition-shadow bottom-0 left-[50%] hover:shadow-glow -translate-x-1/2 translate-y-1/2 p-3 xl:p-6 rounded-full bg-neon-green"
          onClick={onNewQuote}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </main>
    </>
  );
}
