using CatalogService as service from '../../srv/cat-service';

annotate service.Books with {    
    authorName @Common.FieldControl: #ReadOnly;
}

annotate service.Books with {
    author @(
        title: 'Author',
        mandatory,
        Common: {
            Label: 'Author',
            ValueList: {
                CollectionPath: 'Authors',
                Parameters: [
                    {
                        $Type: 'Common.ValueListParameterInOut',
                        ValueListProperty: 'ID',
                        LocalDataProperty: 'author_ID'
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'name'
                    },
                ]
            },
        }
    );
}

annotate service.Books with @(
    
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'title',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'stock',
                Value : stock,
            },
            {
                $Type : 'UI.DataField',
                Label : 'author ID',
                Value : author_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'author name',
                Value : authorName,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'title',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Label : 'stock',
            Value : stock,
        },
        {
            $Type : 'UI.DataField',
            Label : 'author',
            Value : author.name,
        },
    ],
);

