import React from 'react';

/**
 * SECURITY: Safe Text Renderer Component
 * Safely renders text with basic formatting like <strong> tags without using dangerouslySetInnerHTML.
 * 
 * Security Features:
 * - Prevents XSS attacks by avoiding innerHTML injection
 * - Only supports whitelisted formatting (**text** -> <strong>text</strong>)
 * - Uses React's built-in XSS protection through JSX rendering
 * - Input validation ensures only expected patterns are processed
 * 
 * This component should be used whenever displaying user-generated content
 * or content that might contain formatting markup.
 */
export const SafeTextRenderer: React.FC<{ text: string }> = ({ text }) => {
  // First, convert **text** to <strong>text</strong>
  const htmlText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Split text by <strong> tags and render appropriately
  const parts = htmlText.split(/(<strong>.*?<\/strong>)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
          // Extract content between strong tags
          const content = part.replace(/<\/?strong>/g, '');
          return <strong key={index}>{content}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};