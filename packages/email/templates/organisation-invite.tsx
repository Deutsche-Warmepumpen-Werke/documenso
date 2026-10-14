import { Letter, Note, Paragraph } from '../dww-letter';

export type OrganisationInviteEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  senderName: string;
  organisationName: string;
  token: string;
};

export const OrganisationInviteEmailTemplate = ({
  baseUrl = 'https://documenso.com',
  senderName = 'John Doe',
  organisationName = 'Organisation Name',
  token = '',
}: OrganisationInviteEmailProps) => (
  <Letter
    heading="Einladung zur Signaturplattform"
    preview={`${senderName} lädt Sie zu „${organisationName}“ ein.`}
    action={{ href: `${baseUrl}/organisation/invite/${token}`, label: 'Einladung annehmen' }}
  >
    <Paragraph>
      {senderName} hat Sie eingeladen, der Organisation „{organisationName}“ auf der Signaturplattform der Deutschen
      Wärmepumpen Werke beizutreten.
    </Paragraph>
    <Note>
      Sie möchten nicht beitreten?{' '}
      <a href={`${baseUrl}/organisation/decline/${token}`} style={{ color: 'inherit' }}>
        Einladung ablehnen
      </a>
    </Note>
  </Letter>
);

export default OrganisationInviteEmailTemplate;
