import { CacheModule, Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { PrismaService } from 'src/config/prisma.service';
import { TweetsCountService } from './tweets-count/tweets-count.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [TweetsController],
  providers: [TweetsService, PrismaService, TweetsCountService],
})
export class TweetsModule {}
