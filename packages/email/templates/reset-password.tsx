import type { TPasswordChangeSource } from '@documenso/lib/jobs/definitions/emails/send-password-reset-success-email';

import { Letter, Paragraph } from '../dww-letter';
import type { TemplateResetPasswordProps } from '../template-components/template-reset-password';

export type ResetPasswordTemplateProps = Partial<TemplateResetPasswordProps> & {
  source?: TPasswordChangeSource;
};

export const ResetPasswordTemplate = ({ userName = 'Lucas Smith', source = 'RESET' }: ResetPasswordTemplateProps) => (
  <Letter
    heading="Passwort geändert"
    preview="Ihr Passwort wurde geändert."
    recipientName={userName}
    note="Sie haben das nicht veranlasst? Dann melden Sie sich bitte umgehend bei uns unter info@aero-2.de."
  >
    <Paragraph>
      {source === 'RESET'
        ? 'Ihr Passwort wurde wie gewünscht zurückgesetzt. Sie können sich jetzt mit dem neuen Passwort anmelden.'
        : 'Ihr Passwort wurde geändert.'}
    </Paragraph>
  </Letter>
);

export default ResetPasswordTemplate;
