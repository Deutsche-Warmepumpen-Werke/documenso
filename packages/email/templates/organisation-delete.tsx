import { Letter, Paragraph } from '../dww-letter';

export type OrganisationDeleteEmailProps = {
  assetBaseUrl: string;
  organisationName: string;
  /**
   * Whether the deletion was performed by an administrator (as opposed to the owner).
   * Slightly changes the wording in the email.
   */
  deletedByAdmin?: boolean;
};

export const OrganisationDeleteEmailTemplate = ({
  organisationName = 'Organisation Name Placeholder',
  deletedByAdmin = false,
}: OrganisationDeleteEmailProps) => (
  <Letter heading="Organisation gelöscht" preview={`„${organisationName}“ wurde gelöscht.`}>
    <Paragraph>
      {deletedByAdmin
        ? `ein Administrator hat die Organisation „${organisationName}“ gelöscht.`
        : `die Organisation „${organisationName}“ wurde gelöscht.`}{' '}
      Sie haben damit keinen Zugriff mehr auf deren Dokumente und Vorlagen.
    </Paragraph>
  </Letter>
);

export default OrganisationDeleteEmailTemplate;
