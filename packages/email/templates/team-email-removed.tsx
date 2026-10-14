import { Letter, Paragraph } from '../dww-letter';

export type TeamEmailRemovedTemplateProps = {
  assetBaseUrl: string;
  baseUrl: string;
  teamEmail: string;
  teamName: string;
  teamUrl: string;
};

export const TeamEmailRemovedTemplate = ({
  teamEmail = 'example@documenso.com',
  teamName = 'Team Name',
}: TeamEmailRemovedTemplateProps) => (
  <Letter heading="Team-E-Mail-Adresse entfernt" preview={`${teamEmail} ist nicht mehr Adresse von „${teamName}“.`}>
    <Paragraph>
      die Adresse {teamEmail} ist nicht mehr die E-Mail-Adresse des Teams „{teamName}“. Dokumente des Teams werden nicht
      mehr in ihrem Namen versendet.
    </Paragraph>
  </Letter>
);

export default TeamEmailRemovedTemplate;
