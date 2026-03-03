"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import React, { useState } from "react";

const codeTheme: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: "#e5e7eb",
    background: "none",
    fontFamily:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.6",
    tabSize: 2,
    hyphens: "none"
  },
  'pre[class*="language-"]': {
    color: "#e5e7eb",
    background: "#0a0a0a",
    fontFamily:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.6",
    tabSize: 2,
    hyphens: "none",
    padding: "1.5rem",
    margin: 0,
    overflow: "auto"
  },
  comment: { color: "#6b7280" },
  prolog: { color: "#6b7280" },
  doctype: { color: "#6b7280" },
  cdata: { color: "#6b7280" },
  punctuation: { color: "#e5e7eb" },
  property: { color: "#7dd3fc" },
  tag: { color: "#22d3ee" },
  boolean: { color: "#f472b6" },
  number: { color: "#fbbf24" },
  constant: { color: "#f472b6" },
  symbol: { color: "#f472b6" },
  deleted: { color: "#f87171" },
  selector: { color: "#4ade80" },
  "attr-name": { color: "#7dd3fc" },
  string: { color: "#4ade80" },
  char: { color: "#4ade80" },
  builtin: { color: "#7dd3fc" },
  inserted: { color: "#4ade80" },
  operator: { color: "#e5e7eb" },
  entity: { color: "#fbbf24", cursor: "help" },
  url: { color: "#22d3ee" },
  ".language-css .token.string": { color: "#fbbf24" },
  ".style .token.string": { color: "#fbbf24" },
  atrule: { color: "#f472b6" },
  "attr-value": { color: "#4ade80" },
  keyword: { color: "#f472b6" },
  function: { color: "#7dd3fc" },
  "class-name": { color: "#fbbf24" },
  regex: { color: "#fbbf24" },
  important: { color: "#f472b6", fontWeight: "bold" },
  variable: { color: "#e5e7eb" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" }
};

function CodeBlock({
  language,
  codeString
}: {
  language: string;
  codeString: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="my-6 overflow-hidden"
      style={{
        background: "#0a0a0a",
        border: "1px solid #3f3f46"
      }}
    >
      {language && (
        <div
          className="flex items-center justify-between px-3 py-1.5"
          style={{
            borderBottom: "1px solid #3f3f46",
            background: "#18181b"
          }}
        >
          <span className="text-[#71717a] text-xs font-mono">{language}</span>
          <button
            onClick={copyToClipboard}
            className="text-[#71717a] hover:text-[#a1a1aa] transition-colors"
            title="Copy code"
          >
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={language || "text"}
        style={codeTheme}
        PreTag="div"
        customStyle={{
          margin: 0,
          borderRadius: 0,
          padding: "1rem 1.5rem",
          fontSize: "0.875rem",
          lineHeight: "1.7",
          background: "#0a0a0a",
          border: "none",
          boxShadow: "none",
          color: language ? undefined : "#a1a1aa"
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default function BlogContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-1 mt-12 mb-6 pb-2 border-b border-primary">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-1 mt-10 mb-5 pb-2 border-b border-primary">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl font-bold text-primary-1 mt-8 mb-4">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg sm:text-xl font-bold text-primary-1 mt-6 mb-3">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-base sm:text-lg font-bold text-primary-1 mt-5 mb-2">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-bold text-primary-1 mt-4 mb-2">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-primary-2">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-6 mb-6 space-y-3">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-6 mb-6 space-y-3">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-base sm:text-lg leading-relaxed text-primary-2">
              {children}
            </li>
          ),
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            const rawString = String(children);

            // Fenced code blocks always have a trailing newline; inline code never does
            const isBlock = rawString.includes("\n") || !!language;

            if (!isBlock) {
              return (
                <code className="bg-[#1a1a1a] px-1.5 py-0.5 text-sm text-[#e5e7eb]">
                  {children}
                </code>
              );
            }

            return (
              <CodeBlock
                language={language}
                codeString={rawString.replace(/\n$/, "")}
              />
            );
          },
          // Let CodeBlock handle its own wrapper; pre is redundant here
          pre: ({ children }) => <>{children}</>,
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-primary-1 underline decoration-2 underline-offset-2 hover:opacity-70 transition-opacity"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-1 pl-6 py-2 italic my-6 bg-reversed/5">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-primary my-8" />,
          strong: ({ children }) => (
            <strong className="font-bold text-primary-1">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-primary-2">{children}</em>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-primary">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-reversed/10 border-b-2 border-primary">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-primary">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-reversed/5 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-bold text-primary-1">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-base text-primary-2">{children}</td>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
