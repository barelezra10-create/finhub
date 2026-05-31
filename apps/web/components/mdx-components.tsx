import type { ComponentPropsWithoutRef } from "react";

/**
 * Styled MDX component overrides for Fintiex content (glossary + best).
 * Tailwind Typography plugin is not installed, so we map common MDX elements
 * directly to brand-styled classes here.
 */
export const fintiexMdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mt-10 mb-5"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-display font-bold text-2xl tracking-tight mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="font-display font-bold text-lg tracking-tight mt-7 mb-3"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="font-display font-semibold text-base tracking-tight mt-5 mb-2"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="text-[1.0625rem] leading-relaxed text-ink-soft mb-5"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="list-disc pl-6 mb-5 text-ink-soft space-y-2 text-[1.0625rem] leading-relaxed"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="list-decimal pl-6 mb-5 text-ink-soft space-y-2 text-[1.0625rem] leading-relaxed"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="u-link text-ink font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-ink" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="font-mono text-[0.92em] bg-bg-soft border border-line rounded px-1.5 py-0.5"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="font-mono text-sm bg-bg-soft border border-line rounded-xl p-4 overflow-x-auto mb-5"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-lime pl-5 my-6 text-ink-soft italic"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="border-line my-10" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="w-full text-sm text-left border-collapse"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b border-line" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="font-display font-semibold text-ink py-3 pr-4 align-top"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="py-3 pr-4 text-ink-soft align-top border-b border-line-soft" {...props} />
  ),
};
