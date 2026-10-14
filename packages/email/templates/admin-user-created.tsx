import { Letter, Paragraph } from '../dww-letter';
import type { TemplateAdminUserCreatedProps } from '../template-components/template-admin-user-created';

export const AdminUserCreatedTemplate = ({ resetPasswordLink }: TemplateAdminUserCreatedProps) => (
  <Letter
    heading="Ihr Zugang zur Signaturplattform"
    preview="Für Sie wurde ein Konto angelegt."
    action={{ href: resetPasswordLink, label: 'Passwort festlegen' }}
  >
    <Paragraph>
      für Sie wurde ein Konto auf der Signaturplattform der Deutschen Wärmepumpen Werke angelegt. Bitte legen Sie über
      den folgenden Link Ihr Passwort fest.
    </Paragraph>
  </Letter>
);

export default AdminUserCreatedTemplate;
