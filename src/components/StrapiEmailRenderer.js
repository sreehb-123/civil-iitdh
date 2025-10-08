// components/StrapiRichTextRenderer.jsx
import { useState,useEffect } from "react";

const StrapiEmailRenderer = ({ content }) => {
    const [processedHtml, setProcessedHtml] = useState("");

    useEffect(() => {
        if (content) {
            const rawHtml = blocksToHtml(content);

            const emailRegex =
                /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

            const safeHtml = rawHtml.replace(
                emailRegex,
                (email) =>
                    `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank" class="text-[#faa519] underline">${email}</a>`
            );

            setProcessedHtml(safeHtml);
        }
    }, [content]);

    return (
        <div
            className="prose prose-slate max-w-none prose-sm sm:prose-base"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
        />
    );
};

// Reuse the same utility function
function blocksToHtml(blocks) {
    return blocks
        .map((block) => {
            switch (block.type) {
                case "paragraph":
                    return `<p>${block.children
                        .map((child) => child.text)
                        .join("")}</p>`;
                case "heading":
                    return `<h${block.level}>${block.children
                        .map((child) => child.text)
                        .join("")}</h${block.level}>`;
                case "list":
                    const tag = block.format === "unordered" ? "ul" : "ol";
                    const listItems = block.children
                        .map(
                            (li) =>
                                `<li>${li.children
                                    .map((child) => child.text)
                                    .join("")}</li>`
                        )
                        .join("");
                    return `<${tag}>${listItems}</${tag}>`;
                default:
                    return "";
            }
        })
        .join("");
}

export default StrapiEmailRenderer;
