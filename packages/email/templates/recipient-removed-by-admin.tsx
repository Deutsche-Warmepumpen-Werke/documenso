import { Letter, Paragraph } from '../dww-letter';
import type { TemplateRecipientRemovedByAdminProps } from '../template-components/template-recipient-removed-by-admin';

export type RecipientRemovedByAdminEmailTemplateProps = Partial<TemplateRecipientRemovedByAdminProps>;

export const RecipientRemovedByAdminEmailTemplate = ({
  audience = 'recipient',
  documentName = 'Open Source Pledge.pdf',
  recipientName = 'Lucas Smith',
  recipientEmail = 'lucas@documenso.com',
}: RecipientRemovedByAdminEmailTemplateProps) =>
  audience === 'recipient' ? (
    <Letter
      heading="Dokument nicht mehr erforderlich"
      preview={`Sie müssen „${documentName}“ nicht mehr bearbeiten.`}
      recipientName={recipientName}
    >
      <Paragraph>
        ein Administrator hat Sie als Empfänger des Dokuments „{documentName}“ entfernt. Sie müssen nichts weiter tun.
      </Paragraph>
    </Letter>
  ) : (
    <Letter heading="Empfänger entfernt" preview={`${recipientName} wurde aus „${documentName}“ entfernt.`}>
      <Paragraph>
        ein Administrator hat {recipientName} ({recipientEmail}) als Empfänger des Dokuments „{documentName}“ entfernt.
      </Paragraph>
    </Letter>
  );

export default RecipientRemovedByAdminEmailTemplate;
