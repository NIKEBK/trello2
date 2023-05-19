import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RepositoryModule } from './repository/repository.module';
import { UserModule } from './user/user.module';
//import { AuthModule } from './modules/auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { CardModule } from './card/card.module';
import { ColumnModule } from './column/column.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), RepositoryModule, UserModule, CommentModule, CardModule, ColumnModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
