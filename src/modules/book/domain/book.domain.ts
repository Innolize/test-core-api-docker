import { Author } from '@modules/author/domain/author.domain';
import { Base } from '@common/domain/base.domain';

export class Book extends Base {
  title: string;
  format: string;
  author: Author;
}
