import { Letter, Paragraph, Quote } from '../dww-letter';
import type { TemplateDocumentDeleteProps } from '../template-components/template-document-super-delete';

export type DocumentDeleteEmailTemplateProps = Partial<TemplateDocumentDeleteProps>;

export const DocumentSuperDeleteEmailTemplate = ({
  documentName = 'Open Source Pledge.pdf',
  reason = 'Unknown',
}: DocumentDeleteEmailTemplateProps) => (
  <Letter heading="Dokument gelöscht" preview={`Ein Administrator hat „${documentName}“ gelöscht.`}>
    <Paragraph>
      ein Administrator hat Ihr Dokument „{documentName}“ gelöscht. Es lässt sich nicht wiederherstellen.
    </Paragraph>
    {reason && <Quote>{reason.trim()}</Quote>}
  </Letter>
);

export default DocumentSuperDeleteEmailTemplate;
