import { Trans } from '@lingui/react/macro';

import { Link, Section, Text } from '../components';
import { DWW_COLOR, DWW_FONT, DWW_PROFILE } from '../dww';

export type TemplateFooterProps = {
  isDocument?: boolean;
  reportUrl?: string;
};

const SEPARATOR = '  ·  ';

const mutedLink = { color: DWW_COLOR.muted, textDecoration: 'none' } as const;

export const TemplateFooter = ({ reportUrl }: TemplateFooterProps) => (
  <Section>
    {reportUrl && (
      <Text className="mt-8 mb-0 text-[13px] leading-5" style={{ color: DWW_COLOR.muted, fontFamily: DWW_FONT }}>
        <Trans>
          Did not expect this email?{' '}
          <Link href={reportUrl} style={{ color: DWW_COLOR.brand, textDecoration: 'none' }}>
            Click here to report the sender
          </Link>
          . Never sign a document you don't recognize or weren't expecting.
        </Trans>
      </Text>
    )}

    <Section className="mt-9">
      <div style={{ height: 2, lineHeight: '2px', fontSize: 0, backgroundColor: DWW_COLOR.brand }}>&nbsp;</div>

      <Text
        className="m-0 mt-[18px] font-semibold text-[13px] leading-5"
        style={{ color: DWW_COLOR.ink, fontFamily: DWW_FONT }}
      >
        {DWW_PROFILE.legalName}
      </Text>

      <Text className="m-0 mt-0.5 text-[12px] leading-[19px]" style={{ color: DWW_COLOR.muted, fontFamily: DWW_FONT }}>
        {DWW_PROFILE.address}
        {DWW_PROFILE.contact.map((item) => (
          <span key={item.href}>
            {SEPARATOR}
            <Link href={item.href} style={{ color: DWW_COLOR.brand, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {item.label}
            </Link>
          </span>
        ))}
      </Text>

      <Text className="m-0 mt-2.5 text-[11px] leading-[17px]" style={{ color: DWW_COLOR.muted, fontFamily: DWW_FONT }}>
        {DWW_PROFILE.legal.join(' · ')} ·{' '}
        <Link href={DWW_PROFILE.imprint} style={mutedLink}>
          Impressum
        </Link>{' '}
        ·{' '}
        <Link href={DWW_PROFILE.privacy} style={mutedLink}>
          Datenschutz
        </Link>{' '}
        ·{' '}
        <Link href={DWW_PROFILE.source} style={mutedLink}>
          Quellcode
        </Link>
      </Text>
    </Section>
  </Section>
);

export default TemplateFooter;
