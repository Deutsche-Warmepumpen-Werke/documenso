import { Letter, Paragraph } from '../dww-letter';
import type { TemplateForgotPasswordProps } from '../template-components/template-forgot-password';

export type ForgotPasswordTemplateProps = Partial<TemplateForgotPasswordProps>;

export const ForgotPasswordTemplate = ({
  resetPasswordLink = 'https://documenso.com',
}: ForgotPasswordTemplateProps) => (
  <Letter
    heading="Passwort zurücksetzen"
    preview="Setzen Sie Ihr Passwort zurück."
    action={{ href: resetPasswordLink, label: 'Neues Passwort festlegen' }}
    note="Der Link ist 24 Stunden gültig. Sie haben das nicht angefordert? Dann können Sie diese E-Mail ignorieren."
  >
    <Paragraph>über den folgenden Link legen Sie ein neues Passwort fest.</Paragraph>
  </Letter>
);

export default ForgotPasswordTemplate;
