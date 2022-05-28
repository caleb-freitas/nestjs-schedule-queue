import { CacheModule, Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { PrismaService } from 'src/config/prisma.service';
import { TweetsCountService } from './tweets-count/tweets-count.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    CacheModule.register(),
    BullModule.registerQueue({ name: 'emails' }),
  ],
  controllers: [TweetsController],
  providers: [TweetsService, PrismaService, TweetsCountService],
})
export class TweetsModule {}
