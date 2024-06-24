import { useState, useEffect } from 'react';
import { marked } from 'marked';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const html = marked(text); // Convert Markdown to HTML
    setHtmlContent(html);
  }, [text]);

  useEffect(() => {
    let index = -1;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked(displayedText) }} // Render as HTML
    ></div>
  );
};

export default TypingEffect;
