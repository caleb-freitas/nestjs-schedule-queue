import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class TweetsCountService {
  constructor(private prisma: PrismaService) {}

  @Interval(5000)
  async countTweets(): Promise<void> {
    console.log('executing...');
  }
}
