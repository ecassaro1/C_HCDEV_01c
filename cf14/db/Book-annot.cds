annotate my.bookshop.Book with {
    ID @title : 'Book'
}

annotate my.bookshop.Book with @(

UI : {
    SelectionFields       : [ID],
    LineItem              : [
        {
            $Type              : 'UI.DataFieldForAction',
            Label              : 'Order',
            Action             : 'AdminService.order',
            InvocationGrouping : #Isolated
        },
        {
            Value : ID,
            Label : 'ID'
        },
        {
            Value : title,
            Label : 'Title'
        },
        {
            Value : stock,
            Label : 'Stock'
        }
    ],
    HeaderFacets          : [{
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.FieldGroup#BookID',
        Label  : 'HeaderFacetLabel'
    }, ],
    FieldGroup #BookID    : {Data : [{
        $Type : 'UI.DataField',
        Value : ID
    }]},
    Facets                : [{
        $Type  : 'UI.CollectionFacet',
        Label  : 'FacetLabel',
        Facets : [{
            $Type  : 'UI.ReferenceFacet',
            //Label: '{i18n>Book.annotations.facetLabel}',
            Target : '@UI.FieldGroup#BookTitle'
        }, ]
    }],
    FieldGroup #BookTitle : {Data : [
        {
            $Type : 'UI.DataField',
            Value : title,
            Label : 'Title'
        },
        {
            $Type : 'UI.DataField',
            Value : stock,
            Label : 'Stock'
        }
    ]}
}

);
