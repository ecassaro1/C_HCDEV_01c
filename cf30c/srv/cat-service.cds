using cf30 as model from '../db/schema';

service CatalogService {
    entity Ent1 as projection on model.Ent1;

    annotate Ent1 with @odata.draft.enabled;    
}