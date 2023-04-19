"use client"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code(props) {
    return (
        <SyntaxHighlighter {...props} style={theme} />
    )
}
