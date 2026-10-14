import { Letter, Paragraph, Quote } from '../dww-letter';
import type { TemplateDocumentCompletedProps } from '../template-components/template-document-completed';

export type DocumentCompletedEmailTemplateProps = Partial<TemplateDocumentCompletedProps> & {
  customBody?: string;
  reportUrl?: string;
  recipientName?: string;
};

export const DocumentCompletedEmailTemplate = ({
  downloadLink = 'https://documenso.com',
  documentName = 'Open Source Pledge.pdf',
  customBody,
  reportUrl,
  recipientName,
}: DocumentCompletedEmailTemplateProps) => (
  <Letter
    heading="Dokument abgeschlossen"
    preview={`Alle Beteiligten haben „${documentName}“ unterschrieben.`}
    recipientName={recipientName}
    action={{ href: downloadLink, label: 'Unterschriebenes Dokument herunterladen' }}
    note="Das Dokument trägt eine digitale Signatur mit qualifiziertem Zeitstempel. Bewahren Sie es für Ihre Unterlagen auf."
    reportUrl={reportUrl}
  >
    <Paragraph>
      alle Beteiligten haben das Dokument „{documentName}“ unterschrieben. Damit ist es abgeschlossen.
    </Paragraph>
    {customBody && <Quote>{customBody.trim()}</Quote>}
    <Paragraph>Über den folgenden Link laden Sie das unterschriebene Dokument herunter.</Paragraph>
  </Letter>
);

export default DocumentCompletedEmailTemplate;
