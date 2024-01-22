using { nw as remote } from './external/nw';

service catalog {
    entity Products as projection on remote.Products;
}