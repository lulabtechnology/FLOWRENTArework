interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-soft sm:px-5 sm:py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
        <span className="text-sm font-semibold text-slate-900 sm:text-base">
          {question}
        </span>
        <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-brand-700 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-2 text-sm text-slate-600">{answer}</p>
    </details>
  );
}
