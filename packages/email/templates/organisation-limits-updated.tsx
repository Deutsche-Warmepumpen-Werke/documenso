import { msg } from '@lingui/core/macro';

import { Letter, Paragraph } from '../dww-letter';

export type OrganisationLimitsUpdatedEmailProps = {
  assetBaseUrl: string;
  organisationName: string;
};

export const OrganisationLimitsUpdatedEmailTemplate = ({
  organisationName = 'Organisation Name',
}: OrganisationLimitsUpdatedEmailProps) => (
  <Letter heading="Kontingente aktualisiert" preview={`Die Kontingente von „${organisationName}“ wurden angepasst.`}>
    <Paragraph>
      die Kontingente der Organisation „{organisationName}“ wurden angepasst. Sie können wie gewohnt weiterarbeiten.
    </Paragraph>
  </Letter>
);

export const ORGANISATION_LIMITS_UPDATED_SUBJECT = msg`Your organisation limits have been updated`;

export default OrganisationLimitsUpdatedEmailTemplate;
