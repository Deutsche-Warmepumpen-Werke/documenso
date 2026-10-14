import { SUPPORT_EMAIL } from '@documenso/lib/constants/app';

import { Letter, Paragraph } from '../dww-letter';

export type OrganisationLimitAlertEmailProps = {
  assetBaseUrl: string;
  organisationName: string;
  counter: 'document' | 'email' | 'api';
  kind: 'rateLimit' | 'quota' | 'quotaNearing';
  period: string;
};

const COUNTER = { document: 'Dokumente', email: 'E-Mails', api: 'API-Anfragen' } as const;

export const OrganisationLimitAlertEmailTemplate = ({
  organisationName = 'Organisation Name',
  counter = 'email',
  kind = 'quota',
}: OrganisationLimitAlertEmailProps) => {
  const what = COUNTER[counter];
  const copy = {
    quotaNearing: `die Organisation „${organisationName}“ nähert sich dem Kontingent für ${what}.`,
    quota: `die Organisation „${organisationName}“ hat das Kontingent für ${what} überschritten. Neue ${what} sind bis zur Prüfung pausiert.`,
    rateLimit: `die Organisation „${organisationName}“ erzeugt ${what} schneller als üblich. Einige Anfragen werden vorübergehend gedrosselt.`,
  }[kind];

  return (
    <Letter heading={kind === 'quotaNearing' ? 'Kontingent fast erreicht' : 'Kontingent überschritten'} preview={copy}>
      <Paragraph>{copy}</Paragraph>
      <Paragraph>Bei Fragen erreichen Sie den Support unter {SUPPORT_EMAIL}.</Paragraph>
    </Letter>
  );
};

export default OrganisationLimitAlertEmailTemplate;
