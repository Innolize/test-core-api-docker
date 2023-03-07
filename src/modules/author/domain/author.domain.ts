import { Book } from '@modules/book/domain/book.domain';
import { Base } from '@common/domain/base.domain';

export class Author extends Base {
  firstName: string;
  lastName: string;
  password: string;
  status: string;
  books?: Book[];

  changePassword() {
    console.log('hola');
  }
}
