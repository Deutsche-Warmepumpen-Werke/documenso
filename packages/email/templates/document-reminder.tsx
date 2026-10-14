import { RecipientRole } from '@prisma/client';

import { Letter, Paragraph, Quote } from '../dww-letter';
import { INVITE_COPY } from './document-invite';

export type DocumentReminderEmailTemplateProps = {
  recipientName: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl?: string;
  customBody?: string;
  role: RecipientRole;
  reportUrl?: string;
};

export const DocumentReminderEmailTemplate = ({
  recipientName = 'John Doe',
  documentName = 'Open Source Pledge.pdf',
  signDocumentLink = 'https://documenso.com',
  customBody,
  role = RecipientRole.SIGNER,
  reportUrl,
}: DocumentReminderEmailTemplateProps) => {
  const copy = INVITE_COPY[role];

  return (
    <Letter
      heading={`Erinnerung: ${copy.heading}`}
      preview={`Das Dokument „${documentName}“ wartet noch auf Sie.`}
      recipientName={recipientName}
      action={{ href: signDocumentLink, label: copy.action }}
      reportUrl={reportUrl}
    >
      <Paragraph>
        das Dokument „{documentName}“ wartet noch auf Sie. Bitte nehmen Sie sich kurz Zeit, es {copy.verb}.
      </Paragraph>
      {customBody && <Quote>{customBody.trim()}</Quote>}
      <Paragraph>{copy.detail}</Paragraph>
    </Letter>
  );
};

export default DocumentReminderEmailTemplate;
