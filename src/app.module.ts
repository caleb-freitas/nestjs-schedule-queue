import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [ScheduleModule.forRoot(), TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
