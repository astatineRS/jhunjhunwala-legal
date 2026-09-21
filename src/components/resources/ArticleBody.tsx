import type { Block } from "@/content/insights";

/**
 * Renders the authored block list into long-form markup styled by `prose-legal`.
 * The opening paragraph is lifted out as a standfirst — it carries the argument
 * of the piece, so it gets the larger serif treatment rather than being repeated.
 */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  const [first, ...rest] = blocks;
  const lead = first && first.type === "p" ? first : null;
  const body = lead ? rest : blocks;

  return (
    <>
      {lead ? (
        <p className="mb-10 border-l-2 border-gold pl-5 font-display text-[1.375rem] leading-snug text-ink/85">
          {lead.text}
        </p>
      ) : null}

      <div className="prose-legal">
        {body.map((block, index) => {
          if (block.type === "h3") {
            return <h3 key={`h3-${index}`}>{block.text}</h3>;
          }
          if (block.type === "quote") {
            return <blockquote key={`quote-${index}`}>{block.text}</blockquote>;
          }
          if (block.type === "ul") {
            return (
              <ul key={`ul-${index}`}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={`p-${index}`}>{block.text}</p>;
        })}
      </div>
    </>
  );
}
