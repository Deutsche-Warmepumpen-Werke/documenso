import { Letter, Paragraph } from '../dww-letter';

export type ConfirmTeamEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  teamName: string;
  teamUrl: string;
  token: string;
};

export const ConfirmTeamEmailTemplate = ({
  baseUrl = 'https://documenso.com',
  teamName = 'Team Name',
  token = '',
}: ConfirmTeamEmailProps) => (
  <Letter
    heading="Team-E-Mail-Adresse bestätigen"
    preview={`Bestätigen Sie diese Adresse für das Team „${teamName}“.`}
    action={{ href: `${baseUrl}/team/verify/email/${token}`, label: 'Adresse bestätigen' }}
    note="Der Link ist 1 Stunde gültig."
  >
    <Paragraph>
      das Team „{teamName}“ möchte diese E-Mail-Adresse als Team-Adresse nutzen. Dokumente des Teams werden dann in
      ihrem Namen versendet. Bitte bestätigen Sie das über den folgenden Link.
    </Paragraph>
  </Letter>
);

export default ConfirmTeamEmailTemplate;
