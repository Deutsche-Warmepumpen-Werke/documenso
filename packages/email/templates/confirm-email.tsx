import { Letter, Paragraph } from '../dww-letter';
import type { TemplateConfirmationEmailProps } from '../template-components/template-confirmation-email';

export const ConfirmEmailTemplate = ({ confirmationLink }: TemplateConfirmationEmailProps) => (
  <Letter
    heading="E-Mail-Adresse bestätigen"
    preview="Bitte bestätigen Sie Ihre E-Mail-Adresse."
    action={{ href: confirmationLink, label: 'E-Mail-Adresse bestätigen' }}
    note="Der Link ist 1 Stunde gültig."
  >
    <Paragraph>bitte bestätigen Sie Ihre E-Mail-Adresse über den folgenden Link.</Paragraph>
  </Letter>
);

export default ConfirmEmailTemplate;
