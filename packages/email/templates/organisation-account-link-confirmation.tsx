import { Letter, Paragraph } from '../dww-letter';

type OrganisationAccountLinkConfirmationTemplateProps = {
  type: 'create' | 'link';
  confirmationLink: string;
  organisationName: string;
  assetBaseUrl: string;
};

export const OrganisationAccountLinkConfirmationTemplate = ({
  type = 'link',
  confirmationLink = '<CONFIRMATION_LINK>',
  organisationName = '<ORGANISATION_NAME>',
}: OrganisationAccountLinkConfirmationTemplateProps) => (
  <Letter
    heading={type === 'create' ? 'Konto anlegen' : 'Konto verknüpfen'}
    preview={`Bestätigen Sie den Zugang zu „${organisationName}“.`}
    action={{ href: confirmationLink, label: type === 'create' ? 'Konto anlegen' : 'Konto verknüpfen' }}
    note="Der Link ist 30 Minuten gültig. Sie haben das nicht angefordert? Dann können Sie diese E-Mail ignorieren."
  >
    <Paragraph>
      {type === 'create'
        ? `für die Anmeldung bei „${organisationName}“ legen wir ein Konto für Sie an. Bitte bestätigen Sie das über den folgenden Link.`
        : `die Organisation „${organisationName}“ möchte Ihr bestehendes Konto mit ihrer Anmeldung verknüpfen. Bitte bestätigen Sie das über den folgenden Link.`}
    </Paragraph>
  </Letter>
);

export default OrganisationAccountLinkConfirmationTemplate;
