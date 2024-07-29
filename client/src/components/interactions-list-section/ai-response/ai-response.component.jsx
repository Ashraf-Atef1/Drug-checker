import { AiResponseContainer } from './ai-response.style';
import DOMPurify from 'dompurify';

export default function AiResponse ({ aiResponse }) {
  const sanitizedHtml = DOMPurify.sanitize(aiResponse);

  return (
    <AiResponseContainer>
      <h2>AI response:</h2>
      <div id='ai-response' dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </AiResponseContainer>
  );
}
