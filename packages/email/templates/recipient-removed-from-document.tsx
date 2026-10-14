import { Letter, Paragraph } from '../dww-letter';
import type { TemplateDocumentCancelProps } from '../template-components/template-document-cancel';

export type DocumentCancelEmailTemplateProps = Partial<TemplateDocumentCancelProps> & {
  recipientName?: string;
};

export const RecipientRemovedFromDocumentTemplate = ({
  inviterName = 'Lucas Smith',
  documentName = 'Open Source Pledge.pdf',
  recipientName,
}: DocumentCancelEmailTemplateProps) => (
  <Letter
    heading="Dokument nicht mehr erforderlich"
    preview={`Sie müssen „${documentName}“ nicht mehr bearbeiten.`}
    recipientName={recipientName}
  >
    <Paragraph>
      {inviterName} hat Sie als Empfänger des Dokuments „{documentName}“ entfernt. Sie müssen nichts weiter tun.
    </Paragraph>
  </Letter>
);

export default RecipientRemovedFromDocumentTemplate;
