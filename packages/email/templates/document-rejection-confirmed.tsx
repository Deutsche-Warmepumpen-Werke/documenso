import { Letter, Paragraph, Quote } from '../dww-letter';

export type DocumentRejectionConfirmedEmailProps = {
  recipientName: string;
  documentName: string;
  documentOwnerName: string;
  reason: string;
  assetBaseUrl?: string;
};

export function DocumentRejectionConfirmedEmail({
  recipientName,
  documentName,
  documentOwnerName,
  reason,
}: DocumentRejectionConfirmedEmailProps) {
  return (
    <Letter
      heading="Ablehnung bestätigt"
      preview={`Sie haben „${documentName}“ abgelehnt.`}
      recipientName={recipientName}
    >
      <Paragraph>
        Sie haben das Dokument „{documentName}“ abgelehnt. Wir haben {documentOwnerName} darüber informiert.
      </Paragraph>
      {reason && <Quote>{reason.trim()}</Quote>}
    </Letter>
  );
}

export default DocumentRejectionConfirmedEmail;
