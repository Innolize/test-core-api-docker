import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookService } from './application/service/book.service';
import { BookController } from './controllers/book.controller';

import { BookEntity } from '@modules/book/infrastructure/persistence/entities/book.entity';
import { BookMysqlRepository } from '@modules/book/infrastructure/persistence/book.mysql.repository';

import { AuthorModule } from '@modules/author/author.module';
import { CommonModule } from '@common/common.module';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity]), AuthorModule, CommonModule],
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: 'BOOK_REPOSITORY',
      useClass: BookMysqlRepository,
    },
  ],
})
export class BookModule {}
