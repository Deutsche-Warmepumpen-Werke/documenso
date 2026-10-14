import { Letter, Paragraph } from '../dww-letter';
import type { TemplateDocumentSelfSignedProps } from '../template-components/template-document-self-signed';

export type DocumentSelfSignedTemplateProps = TemplateDocumentSelfSignedProps & {
  recipientName?: string;
};

export const DocumentSelfSignedEmailTemplate = ({
  documentName = 'Open Source Pledge.pdf',
  recipientName,
}: DocumentSelfSignedTemplateProps) => (
  <Letter
    heading="Dokument unterschrieben"
    preview={`Sie haben „${documentName}“ unterschrieben.`}
    recipientName={recipientName}
  >
    <Paragraph>Sie haben das Dokument „{documentName}“ unterschrieben. Es ist damit abgeschlossen.</Paragraph>
  </Letter>
);

export default DocumentSelfSignedEmailTemplate;
