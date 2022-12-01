using cf16 as model from '../db/data-model';

service CatalogService {
    @readonly
    entity Lps as projection on model.Lps;
}