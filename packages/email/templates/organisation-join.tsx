import { Letter, Paragraph } from '../dww-letter';

export type OrganisationJoinEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  memberName: string;
  memberEmail: string;
  organisationName: string;
  organisationUrl: string;
};

export const OrganisationJoinEmailTemplate = ({
  baseUrl = 'https://documenso.com',
  memberName = 'John Doe',
  memberEmail = 'johndoe@documenso.com',
  organisationName = 'Organisation Name',
  organisationUrl = 'demo',
}: OrganisationJoinEmailProps) => (
  <Letter
    heading="Neues Mitglied"
    preview={`${memberName} ist „${organisationName}“ beigetreten.`}
    action={{ href: `${baseUrl}/o/${organisationUrl}/settings/members`, label: 'Mitglieder ansehen' }}
  >
    <Paragraph>
      {memberName} ({memberEmail}) ist der Organisation „{organisationName}“ beigetreten.
    </Paragraph>
  </Letter>
);

export default OrganisationJoinEmailTemplate;
