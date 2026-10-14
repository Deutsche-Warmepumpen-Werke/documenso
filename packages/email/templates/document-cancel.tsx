import { Letter, Paragraph, Quote } from '../dww-letter';
import type { TemplateDocumentCancelProps } from '../template-components/template-document-cancel';

export type DocumentCancelEmailTemplateProps = Partial<TemplateDocumentCancelProps> & {
  recipientName?: string;
};

export const DocumentCancelTemplate = ({
  inviterName = 'Lucas Smith',
  documentName = 'Open Source Pledge.pdf',
  cancellationReason,
  recipientName,
}: DocumentCancelEmailTemplateProps) => (
  <Letter
    heading="Dokument zurückgezogen"
    preview={`${inviterName} hat „${documentName}“ zurückgezogen.`}
    recipientName={recipientName}
  >
    <Paragraph>
      {inviterName} hat das Dokument „{documentName}“ zurückgezogen. Sie müssen es nicht mehr unterschreiben.
    </Paragraph>
    {cancellationReason && <Quote>{cancellationReason.trim()}</Quote>}
  </Letter>
);

export default DocumentCancelTemplate;
