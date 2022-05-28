import { Module } from '@nestjs/common';
import { SendMailWithTweetsJob } from './send-mail-with-tweets-job';

@Module({
  providers: [SendMailWithTweetsJob],
})
export class MailingModule {}
