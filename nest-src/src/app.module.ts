import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisModule } from '@liaoliaots/nestjs-redis';


const url = process.env.MONGO_URL || 'localhost';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
   RedisModule.forRoot({
      closeClient: true,
      config: {
        host: 'redis',
        port: 6379,
      },
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${process.env.ME_CONFIG_MONGODB_ADMINPASSWORD}@${url}:27017/admin?serverSelectionTimeoutMS=20000&authSource=admin`,
    ),
  ],
})
export class AppModule {}
