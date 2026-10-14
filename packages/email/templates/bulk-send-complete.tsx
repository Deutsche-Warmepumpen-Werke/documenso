import { Letter, Paragraph, Quote } from '../dww-letter';

export interface BulkSendCompleteEmailProps {
  userName: string;
  templateName: string;
  totalProcessed: number;
  successCount: number;
  failedCount: number;
  errors: string[];
  assetBaseUrl?: string;
}

export const BulkSendCompleteEmail = ({
  userName,
  templateName,
  totalProcessed,
  successCount,
  failedCount,
  errors,
}: BulkSendCompleteEmailProps) => (
  <Letter
    heading="Massenversand abgeschlossen"
    preview={`${successCount} von ${totalProcessed} Dokumenten aus „${templateName}“ versendet.`}
    recipientName={userName}
  >
    <Paragraph>
      der Massenversand der Vorlage „{templateName}“ ist abgeschlossen. Von {totalProcessed} Dokumenten wurden{' '}
      {successCount} versendet{failedCount > 0 ? `, ${failedCount} sind fehlgeschlagen` : ''}.
    </Paragraph>
    {errors.length > 0 && <Quote>{errors.join('\n')}</Quote>}
  </Letter>
);

export default BulkSendCompleteEmail;
