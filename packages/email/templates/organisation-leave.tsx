import { Letter, Paragraph } from '../dww-letter';

export type OrganisationLeaveEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  memberName: string;
  memberEmail: string;
  organisationName: string;
  organisationUrl: string;
};

export const OrganisationLeaveEmailTemplate = ({
  baseUrl = 'https://documenso.com',
  memberName = 'John Doe',
  memberEmail = 'johndoe@documenso.com',
  organisationName = 'Organisation Name',
  organisationUrl = 'demo',
}: OrganisationLeaveEmailProps) => (
  <Letter
    heading="Mitglied ausgetreten"
    preview={`${memberName} hat „${organisationName}“ verlassen.`}
    action={{ href: `${baseUrl}/o/${organisationUrl}/settings/members`, label: 'Mitglieder ansehen' }}
  >
    <Paragraph>
      {memberName} ({memberEmail}) hat die Organisation „{organisationName}“ verlassen.
    </Paragraph>
  </Letter>
);

export default OrganisationLeaveEmailTemplate;
