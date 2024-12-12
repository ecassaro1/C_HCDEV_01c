using CatalogService from '../srv/cat-service';

//aggregation annotations
// v4
annotate CatalogService.Books with @(
    Aggregation.ApplySupported        : {
        GroupableProperties : [
            ID,
            title,
        ],
    },

    Aggregation.CustomAggregate #stock: 'Edm.Decimal'
) 
{
      stock  @Analytics.Measure  @Aggregation.default: #SUM
}
