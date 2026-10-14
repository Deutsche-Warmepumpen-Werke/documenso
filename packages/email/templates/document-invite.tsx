import { OrganisationType, RecipientRole } from '@prisma/client';

import { Letter, Paragraph, Quote } from '../dww-letter';
import type { TemplateDocumentInviteProps } from '../template-components/template-document-invite';

export type DocumentInviteEmailTemplateProps = Partial<TemplateDocumentInviteProps> & {
  customBody?: string;
  role: RecipientRole;
  selfSigner?: boolean;
  teamName?: string;
  teamEmail?: string;
  includeSenderDetails?: boolean;
  organisationType?: OrganisationType;
  reportUrl?: string;
  recipientName?: string;
};

export const INVITE_COPY = {
  [RecipientRole.SIGNER]: {
    heading: 'Dokument unterschreiben',
    verb: 'zu unterschreiben',
    detail: 'Über den folgenden Link sehen Sie das Dokument, prüfen es und unterschreiben digital.',
    action: 'Dokument ansehen und unterschreiben',
  },
  [RecipientRole.APPROVER]: {
    heading: 'Dokument freigeben',
    verb: 'freizugeben',
    detail: 'Über den folgenden Link sehen Sie das Dokument, prüfen es und geben es frei.',
    action: 'Dokument prüfen und freigeben',
  },
  [RecipientRole.VIEWER]: {
    heading: 'Dokument ansehen',
    verb: 'anzusehen',
    detail: 'Über den folgenden Link öffnen Sie das Dokument.',
    action: 'Dokument ansehen',
  },
  [RecipientRole.ASSISTANT]: {
    heading: 'Dokument vorbereiten',
    verb: 'vorzubereiten',
    detail: 'Über den folgenden Link öffnen Sie das Dokument und füllen die vorgesehenen Felder aus.',
    action: 'Dokument öffnen',
  },
  [RecipientRole.CC]: {
    heading: 'Dokument zur Kenntnis',
    verb: 'zur Kenntnis zu nehmen',
    detail: 'Über den folgenden Link öffnen Sie das Dokument.',
    action: 'Dokument ansehen',
  },
} as const satisfies Record<RecipientRole, { heading: string; verb: string; detail: string; action: string }>;

const senderOf = ({
  inviterName,
  teamName,
  organisationType,
  includeSenderDetails,
}: Pick<
  DocumentInviteEmailTemplateProps,
  'inviterName' | 'teamName' | 'organisationType' | 'includeSenderDetails'
>) => {
  if (organisationType === OrganisationType.ORGANISATION && teamName) {
    return includeSenderDetails && inviterName ? `${inviterName} (${teamName})` : teamName;
  }

  return inviterName || 'Die Deutschen Wärmepumpen Werke';
};

export const DocumentInviteEmailTemplate = ({
  inviterName = 'Lucas Smith',
  documentName = 'Open Source Pledge.pdf',
  signDocumentLink = 'https://documenso.com',
  customBody,
  role,
  selfSigner = false,
  teamName = '',
  includeSenderDetails,
  organisationType,
  reportUrl,
  recipientName,
}: DocumentInviteEmailTemplateProps) => {
  const copy = INVITE_COPY[role];
  const sender = senderOf({ inviterName, teamName, organisationType, includeSenderDetails });

  const intro = selfSigner
    ? `Sie haben das Dokument „${documentName}“ erstellt. Bitte schließen Sie es noch ab.`
    : `${sender} bittet Sie, das Dokument „${documentName}“ ${copy.verb}.`;

  return (
    <Letter
      heading={copy.heading}
      preview={intro}
      recipientName={recipientName}
      action={{ href: signDocumentLink, label: copy.action }}
      note={role === RecipientRole.SIGNER ? 'Für die digitale Unterschrift brauchen Sie kein Konto.' : undefined}
      reportUrl={reportUrl}
    >
      <Paragraph>{intro}</Paragraph>
      {customBody && <Quote>{customBody.trim()}</Quote>}
      <Paragraph>{copy.detail}</Paragraph>
    </Letter>
  );
};

export default DocumentInviteEmailTemplate;
