import { Letter, Paragraph } from '../dww-letter';
import type { TemplateRecipientExpiredProps } from '../template-components/template-recipient-expired';

export type RecipientExpiredEmailTemplateProps = Partial<TemplateRecipientExpiredProps> & {
  ownerName?: string;
};

export const RecipientExpiredTemplate = ({
  documentName = 'Open Source Pledge.pdf',
  recipientName = 'John Doe',
  recipientEmail = 'john@example.com',
  documentLink = 'https://documenso.com',
  ownerName,
}: RecipientExpiredEmailTemplateProps) => {
  const recipient = recipientName ? `${recipientName} (${recipientEmail})` : recipientEmail;

  return (
    <Letter
      heading="Frist abgelaufen"
      preview={`${recipient} hat „${documentName}“ nicht rechtzeitig bearbeitet.`}
      recipientName={ownerName}
      action={{ href: documentLink, label: 'Dokument öffnen' }}
    >
      <Paragraph>
        die Frist für {recipient} zum Dokument „{documentName}“ ist abgelaufen. Sie können das Dokument erneut senden
        oder den Empfänger ändern.
      </Paragraph>
    </Letter>
  );
};

export default RecipientExpiredTemplate;
