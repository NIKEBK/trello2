import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RepositoryModule } from './repository/repository.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { CardModule } from './card/card.module';
import { ColumnModule } from './column/column.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { ConfigModule } from '@nestjs/config';
import configurations from '../src/configurations';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    RepositoryModule,
    UserModule,
    CommentModule,
    CardModule,
    ColumnModule,
    AuthModule,
    TokenModule,
  ConfigModule.forRoot({ isGlobal: true, load: [configurations] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
