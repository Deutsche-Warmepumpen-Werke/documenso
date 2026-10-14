import { Letter, Paragraph } from '../dww-letter';
import type { TemplateDocumentPendingProps } from '../template-components/template-document-pending';

export type DocumentPendingEmailTemplateProps = Partial<TemplateDocumentPendingProps> & {
  recipientName?: string;
};

export const DocumentPendingEmailTemplate = ({
  documentName = 'Open Source Pledge.pdf',
  recipientName,
}: DocumentPendingEmailTemplateProps) => (
  <Letter
    heading="Unterschrift erhalten"
    preview={`Ihre Unterschrift für „${documentName}“ ist bei uns eingegangen.`}
    recipientName={recipientName}
  >
    <Paragraph>vielen Dank, Ihre Unterschrift für das Dokument „{documentName}“ ist bei uns eingegangen.</Paragraph>
    <Paragraph>
      Es fehlen noch Unterschriften weiterer Beteiligter. Sobald alle unterschrieben haben, senden wir Ihnen das fertige
      Dokument per E-Mail.
    </Paragraph>
  </Letter>
);

export default DocumentPendingEmailTemplate;
