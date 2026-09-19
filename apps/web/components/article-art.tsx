import Image from "next/image";

/** Topic illustrations, never portraits of the named authors. */
export function ArticleArt({ topic, className = "" }: { topic: string; className?: string }) {
  const key = /mortgage|home|refinan/i.test(topic) ? "home" : /card|credit|reward/i.test(topic) ? "cards" : "saving";
  return (
    <div className={`article-art article-art-${key} ${className}`} aria-hidden="true">
      <Image src={`/illustrations/${key}-avatar.jpg`} alt="" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 420px" />
    </div>
  );
}
