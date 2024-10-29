using my.bookshop as my from '../db/data-model';

service CatalogService {
    entity Books as projection on my.Books {
        *,
        author.name as authorName
    };

    entity Authors as projection on my.Authors;
}

annotate CatalogService.Books with @odata.draft.enabled;