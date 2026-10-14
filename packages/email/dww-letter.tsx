import type { ReactNode } from 'react';
import * as ReactEmail from 'react-email';

import { DWW_COLOR, DWW_FONT, DWW_PROFILE } from './dww';
import { TemplateFooter } from './template-components/template-footer';

// The building blocks of Curia's `email()` shell (packages/emails/src/layout.ts), as React Email components.

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

const salutation = (name: string | undefined) =>
  name === undefined || name.trim() === '' ? 'Sehr geehrte Damen und Herren,' : `Guten Tag ${name.trim()},`;

export const Paragraph = ({ children, spacing = 16 }: { children: ReactNode; spacing?: number }) => (
  <ReactEmail.Text
    style={{
      margin: `${spacing}px 0 0 0`,
      fontFamily: DWW_FONT,
      fontSize: 15,
      lineHeight: '24px',
      color: DWW_COLOR.copy,
    }}
  >
    {children}
  </ReactEmail.Text>
);

/** Small print for side notes. */
export const Note = ({ children, spacing = 16 }: { children: ReactNode; spacing?: number }) => (
  <ReactEmail.Text
    style={{
      margin: `${spacing}px 0 0 0`,
      fontFamily: DWW_FONT,
      fontSize: 13,
      lineHeight: '20px',
      color: DWW_COLOR.muted,
      wordBreak: 'break-word',
    }}
  >
    {children}
  </ReactEmail.Text>
);

/** Quoted context, e.g. the sender's own message or a rejection reason. */
export const Quote = ({ children, spacing = 20 }: { children: ReactNode; spacing?: number }) => (
  <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ marginTop: spacing }}>
    <tbody>
      <tr>
        <td
          style={{
            padding: '2px 0 2px 14px',
            borderLeft: `2px solid ${DWW_COLOR.border}`,
            fontFamily: DWW_FONT,
            fontSize: 15,
            lineHeight: '24px',
            color: DWW_COLOR.copy,
            whiteSpace: 'pre-line',
          }}
        >
          {children}
        </td>
      </tr>
    </tbody>
  </table>
);

/** A one-time code, set large enough to read off one screen while typing it into another. */
export const Code = ({ children }: { children: ReactNode }) => (
  <ReactEmail.Text
    style={{
      margin: '20px 0 4px 0',
      fontFamily: MONO,
      fontSize: 30,
      lineHeight: '36px',
      letterSpacing: 6,
      fontWeight: 600,
      color: DWW_COLOR.ink,
    }}
  >
    {children}
  </ReactEmail.Text>
);

/**
 * The call to action is a plain link, the way someone would type it into a mail.
 * The bare url below keeps it usable where links are stripped or printed.
 */
const CallToAction = ({ href, label }: { href: string; label: string }) => (
  <>
    <ReactEmail.Text
      style={{ margin: '24px 0 0 0', fontFamily: DWW_FONT, fontSize: 15, lineHeight: '24px', fontWeight: 500 }}
    >
      <ReactEmail.Link href={href} style={{ color: DWW_COLOR.brand, textDecoration: 'none' }}>
        {label}&nbsp;&rarr;
      </ReactEmail.Link>
    </ReactEmail.Text>
    <ReactEmail.Text
      style={{
        margin: '2px 0 0 0',
        fontFamily: DWW_FONT,
        fontSize: 11,
        lineHeight: '16px',
        color: DWW_COLOR.muted,
        wordBreak: 'break-all',
      }}
    >
      <ReactEmail.Link href={href} style={{ color: DWW_COLOR.muted, textDecoration: 'none' }}>
        {href}
      </ReactEmail.Link>
    </ReactEmail.Text>
  </>
);

export type LetterProps = {
  heading: string;
  /** Inbox preview; defaults to the heading. */
  preview?: string;
  /** Without a name the letter opens with "Sehr geehrte Damen und Herren,". */
  recipientName?: string;
  action?: { href: string; label: string };
  /** Small print between the sign-off and the signature. */
  note?: ReactNode;
  reportUrl?: string;
  children: ReactNode;
};

/**
 * Every DWW mail goes through here, so none goes out without a heading, a salutation and the sign-off.
 * The copy after the salutation continues lowercase, as German letters do after "Guten Tag …,".
 */
export const Letter = ({ heading, preview, recipientName, action, note, reportUrl, children }: LetterProps) => (
  <ReactEmail.Html lang="de">
    <ReactEmail.Head>
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
    </ReactEmail.Head>
    <ReactEmail.Preview>{preview ?? heading}</ReactEmail.Preview>
    <ReactEmail.Body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff' }}>
      <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0}>
        <tbody>
          <tr>
            <td style={{ padding: 32 }}>
              <table
                role="presentation"
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                border={0}
                style={{ maxWidth: 560 }}
              >
                <tbody>
                  <tr>
                    <td>
                      <ReactEmail.Img
                        src={DWW_PROFILE.logo.url}
                        alt={DWW_PROFILE.shortName}
                        width={DWW_PROFILE.logo.width}
                        height={DWW_PROFILE.logo.height}
                        style={{ display: 'block', border: 'none', outline: 'none' }}
                      />
                      <ReactEmail.Heading
                        as="h1"
                        style={{
                          margin: '32px 0 0 0',
                          fontFamily: DWW_FONT,
                          fontSize: 24,
                          lineHeight: '32px',
                          fontWeight: 600,
                          color: DWW_COLOR.ink,
                          wordBreak: 'break-word',
                        }}
                      >
                        {heading}
                      </ReactEmail.Heading>
                      <Paragraph spacing={20}>{salutation(recipientName)}</Paragraph>
                      {children}
                      {action && <CallToAction href={action.href} label={action.label} />}
                      <Paragraph spacing={32}>
                        Mit freundlichen Grüßen
                        <br />
                        {DWW_PROFILE.team}
                      </Paragraph>
                      {note && <Note spacing={28}>{note}</Note>}
                      <TemplateFooter reportUrl={reportUrl} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </ReactEmail.Body>
  </ReactEmail.Html>
);
