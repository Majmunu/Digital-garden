import React from 'react';
interface CodeBlockProps {
    code:any
    language:string
}
const CodeBlock:React.FC<CodeBlockProps> = ({ code, language }) => {
    const codeClassName = `language-${language}`;
    return (
        <pre>
      <code className={codeClassName}>
        {code}
      </code>
    </pre>
    );
};

export default CodeBlock;
