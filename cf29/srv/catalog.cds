using { cf26 as external } from './external/cf26';

service catalog {
    entity Books as projection on external.Books;
}