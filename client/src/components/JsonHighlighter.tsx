import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-okaidia.css';

interface JsonHighlighterProps {
    jsonData: Record<string, unknown>; // Adjust the type according to your JSON structure
}

const JsonHighlighter: React.FC<JsonHighlighterProps> = ({ jsonData }) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [jsonData]);

    return (
        <pre >
            <code ref={codeRef} className="language-json">
                {JSON.stringify(jsonData, null, 2)}
            </code>
        </pre>
    );
};

export default JsonHighlighter;