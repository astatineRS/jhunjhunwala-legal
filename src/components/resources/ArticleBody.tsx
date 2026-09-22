import type { Block } from "@/content/insights";

/**
 * Renders the authored block list into long-form markup styled by `prose-legal`:
 * plain paragraphs, bold sans sub-headings, gold-bulleted lists and pull quotes.
 */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-legal">
      {blocks.map((block, index) => {
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
  );
}
