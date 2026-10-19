import type { Metadata } from "next";
import { bncDirectory, type BncItem } from "./data/bnc-data";

export const metadata: Metadata = {
  title: bncDirectory.header.title,
  description: bncDirectory.header.subtitle,
};

const titleClass = "font-medium tracking-tight text-neutral-900";

const badgeClass =
  "ml-1.5 inline-block align-middle rounded bg-neutral-200/50 px-1.5 py-0.5 font-mono text-[11px] text-neutral-500";

const descClass = "text-[13px] leading-relaxed text-neutral-600";

function DirectoryItem({ item }: { item: BncItem }) {
  const external = item.url?.startsWith("http");

  return (
    <li>
      <p>
        {item.url ? (
          <a
            href={item.url}
            className={`group ${titleClass} transition-colors duration-200 ease-out hover:text-neutral-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[3px] focus-visible:outline-[#1F1F1F]`}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {item.title}
            {"\u00A0"}
            <span
              aria-hidden="true"
              className="inline-block font-normal transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        ) : (
          <span className={titleClass}>{item.title}</span>
        )}
        {item.badge ? <span className={badgeClass}>{item.badge}</span> : null}
      </p>
      <p className={`mt-0.5 ${descClass}`}>{item.desc}</p>
      {item.meta ? <p className={descClass}>{item.meta}</p> : null}
    </li>
  );
}

function Subtitle({
  subtitle,
  emphasis,
}: {
  subtitle: string;
  emphasis: string;
}) {
  const emphasized = subtitle.startsWith(emphasis);

  return (
    <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
      {emphasized ? (
        <>
          <span className="font-serif text-[17px] italic text-[#171717]">
            {emphasis}
          </span>
          {subtitle.slice(emphasis.length)}
        </>
      ) : (
        subtitle
      )}
    </p>
  );
}

export default function Home() {
  const { header, sections } = bncDirectory;
  const { alert } = header;

  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-6 pt-28 pb-16 sm:pt-36">
      <header className="enter" style={{ animationDelay: "50ms" }}>
        <h1 className="font-serif text-3xl font-normal tracking-tight text-[#171717]">
          {header.title}
        </h1>
        <Subtitle subtitle={header.subtitle} emphasis={header.emphasis} />
        <div
          role="status"
          className="mt-8 rounded-sm border-l-2 border-neutral-800 bg-neutral-100/60 p-3.5"
        >
          <p className="text-[13px] font-semibold tracking-tight text-neutral-900">
            {alert.label}
          </p>
          <p className="mt-1 text-[15px] leading-relaxed text-neutral-800">
            {alert.when}
          </p>
          <p className={descClass}>
            {alert.where}
            <span aria-hidden="true"> · </span>
            {alert.note}
          </p>
        </div>
      </header>

      <div className="my-8 border-t border-neutral-200/60" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {sections.map((section, index) => (
          <section
            key={section.name}
            aria-labelledby={`section-${index}`}
            className="enter"
            style={{ animationDelay: `${120 + index * 60}ms` }}
          >
            <h2
              id={`section-${index}`}
              className="text-[11px] font-mono font-medium tracking-widest text-neutral-400 uppercase"
            >
              {section.name}
            </h2>
            <ul className="mt-4 space-y-5">
              {section.items.map((item) => (
                <DirectoryItem key={item.title} item={item} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
