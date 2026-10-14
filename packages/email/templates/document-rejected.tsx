import { Letter, Paragraph, Quote } from '../dww-letter';

type DocumentRejectedEmailProps = {
  recipientName: string;
  documentName: string;
  documentUrl: string;
  rejectionReason: string;
  assetBaseUrl?: string;
  ownerName?: string;
};

export function DocumentRejectedEmail({
  recipientName,
  documentName,
  documentUrl,
  rejectionReason,
  ownerName,
}: DocumentRejectedEmailProps) {
  return (
    <Letter
      heading="Dokument abgelehnt"
      preview={`${recipientName} hat „${documentName}“ abgelehnt.`}
      recipientName={ownerName}
      action={{ href: documentUrl, label: 'Dokument öffnen' }}
    >
      <Paragraph>
        {recipientName} hat das Dokument „{documentName}“ abgelehnt.
      </Paragraph>
      {rejectionReason && <Quote>{rejectionReason.trim()}</Quote>}
    </Letter>
  );
}

export default DocumentRejectedEmail;
