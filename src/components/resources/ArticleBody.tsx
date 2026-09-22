import type { Block } from "@/content/insights";

/**
 * Renders the authored block list into long-form markup styled by `prose-legal`:
 * plain paragraphs, bold sans sub-headings, gold-bulleted lists and pull quotes.
 */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    // Mobile-only block rhythm: the selectors are written `&.prose-legal …` so
    // they outrank the `prose-legal` utility's own descendant rules. Font sizes
    // and line-heights are deliberately left alone.
    <div className="prose-legal max-md:[&.prose-legal_h3]:mt-6 max-md:[&.prose-legal_blockquote]:my-6 max-md:[&.prose-legal_blockquote]:px-4 max-md:[&.prose-legal_ul]:mb-4">
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
