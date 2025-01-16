using { CatalogService as external} from './external/CatalogService';

service ConsumerService {
  @readonly 
  entity Books as projection on external.Books;
}