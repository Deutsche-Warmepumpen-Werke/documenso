import { Letter, Paragraph } from '../dww-letter';

export type TeamDeleteEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  teamUrl: string;
};

export const TeamDeleteEmailTemplate = ({ teamUrl = 'demo' }: TeamDeleteEmailProps) => (
  <Letter heading="Team gelöscht" preview={`Das Team „${teamUrl}“ wurde gelöscht.`}>
    <Paragraph>das Team „{teamUrl}“, dem Sie angehörten, wurde gelöscht.</Paragraph>
  </Letter>
);

export default TeamDeleteEmailTemplate;
