import { InjectQueue } from '@nestjs/bull';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { Queue } from 'bull';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class TweetsCountService {
  private limit = 10;
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    @InjectQueue('emails')
    private emailsQueue: Queue,
  ) {}

  @Interval(5000)
  async countTweets() {
    console.log('Looking for new tweets...');

    const TEN_MINUTES = 1 * 60 * 10;
    let offset = await this.cacheManager.get<number>('tweet-offset');
    offset = offset === undefined ? 0 : offset;

    console.log(`Offset: ${offset}`);

    const tweets = await this.prisma.tweet.findMany({
      skip: offset,
      take: this.limit,
    });

    console.log(`${tweets.length} tweets found\n`);

    if (tweets.length === this.limit) {
      this.cacheManager.set('tweet-offset', offset + this.limit, {
        ttl: TEN_MINUTES,
      });
      console.log(`Find ${this.limit} more tweets`);
      this.emailsQueue.add(tweets);
    }
  }
}
