annotate cf6.Ent1 with {
	ID @title: 'ID'
}

annotate cf6.Ent1 with @(

	UI: {
		SelectionFields: [ ID ],
		LineItem: [
			{ Value: ID, Label: 'ID' },
			{ Value: name, Label: 'Name' }
		],
		HeaderFacets: [       
			{$Type: 'UI.ReferenceFacet', 
            Target: '@UI.FieldGroup#Ent1ID', 
            Label:'HeaderFacetLabel' },
		],						
		FieldGroup#Ent1ID: {
			Data:[
				{$Type: 'UI.DataField', Value: ID}
			]
		},
		Facets: [
			{
				$Type: 'UI.CollectionFacet',
				Label: 'FacetLabel',
				Facets: [
					{
						$Type: 'UI.ReferenceFacet', 
						//Label: '{i18n>Ent1.annotations.facetLabel}',
						Target: '@UI.FieldGroup#Ent1Name'
					},
				]
			}
		],			
		FieldGroup#Ent1Name: {
			Data:[
				{$Type: 'UI.DataField', Value: name, Label: 'Name'}
			]
		}			
	}

);