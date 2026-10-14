import { Letter, Paragraph } from '../dww-letter';

export interface DocumentRecipientSignedEmailTemplateProps {
  documentName?: string;
  recipientName?: string;
  recipientEmail?: string;
  assetBaseUrl?: string;
  ownerName?: string;
}

export const DocumentRecipientSignedEmailTemplate = ({
  documentName = 'Open Source Pledge.pdf',
  recipientName = 'John Doe',
  recipientEmail = 'lucas@documenso.com',
  ownerName,
}: DocumentRecipientSignedEmailTemplateProps) => {
  const signer = recipientName ? `${recipientName} (${recipientEmail})` : recipientEmail;

  return (
    <Letter
      heading="Neue Unterschrift"
      preview={`${signer} hat „${documentName}“ unterschrieben.`}
      recipientName={ownerName}
    >
      <Paragraph>
        {signer} hat das Dokument „{documentName}“ unterschrieben. Sobald alle Beteiligten unterschrieben haben,
        erhalten Sie das fertige Dokument per E-Mail.
      </Paragraph>
    </Letter>
  );
};

export default DocumentRecipientSignedEmailTemplate;
