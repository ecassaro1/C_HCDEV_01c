using { nw as remote } from './external/nw';

service catatalog {
    entity Products as projection on remote.Products;
}