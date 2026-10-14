import { RecipientRole } from '@prisma/client';

import { Letter, Paragraph } from '../dww-letter';

export type DocumentCompletedEmailTemplateProps = {
  recipientName?: string;
  recipientRole?: RecipientRole;
  documentLink?: string;
  documentName?: string;
  assetBaseUrl?: string;
};

const ACTION = {
  [RecipientRole.SIGNER]: 'unterschrieben',
  [RecipientRole.APPROVER]: 'freigegeben',
  [RecipientRole.VIEWER]: 'angesehen',
  [RecipientRole.ASSISTANT]: 'vorbereitet',
  [RecipientRole.CC]: 'erhalten',
} as const satisfies Record<RecipientRole, string>;

export const DocumentCreatedFromDirectTemplateEmailTemplate = ({
  recipientName = 'John Doe',
  recipientRole = RecipientRole.SIGNER,
  documentLink = 'http://localhost:3000',
  documentName = 'Open Source Pledge.pdf',
}: DocumentCompletedEmailTemplateProps) => (
  <Letter
    heading="Neues Dokument aus Ihrer Vorlage"
    preview={`${recipientName} hat „${documentName}“ ${ACTION[recipientRole]}.`}
    action={{ href: documentLink, label: 'Dokument öffnen' }}
  >
    <Paragraph>
      über Ihren Direktlink hat {recipientName} das Dokument „{documentName}“ erstellt und {ACTION[recipientRole]}.
    </Paragraph>
  </Letter>
);

export default DocumentCreatedFromDirectTemplateEmailTemplate;
