import { Code, Letter, Paragraph } from '../dww-letter';

export type AccessAuth2FAEmailTemplateProps = {
  documentTitle: string;
  code: string;
  userEmail: string;
  userName: string;
  expiresInMinutes: number;
  assetBaseUrl?: string;
};

export const AccessAuth2FAEmailTemplate = ({
  documentTitle,
  code,
  userName,
  expiresInMinutes,
}: AccessAuth2FAEmailTemplateProps) => (
  <Letter
    heading="Ihr Bestätigungscode"
    preview={`Ihr Code für „${documentTitle}“: ${code}`}
    recipientName={userName}
    note="Sie haben keinen Code angefordert? Dann können Sie diese E-Mail ignorieren."
  >
    <Paragraph>mit diesem Code öffnen Sie das Dokument „{documentTitle}“:</Paragraph>
    <Code>{code}</Code>
    <Paragraph>Der Code ist {expiresInMinutes} Minuten gültig.</Paragraph>
  </Letter>
);

export default AccessAuth2FAEmailTemplate;
