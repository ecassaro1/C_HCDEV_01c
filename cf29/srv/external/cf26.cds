/* checksum : 7e09b1697d8f3cb0af7f788cda4a4028 */
@cds.external : true
@cds.persistence.skip : true
@UI.LineItem : [
  {
    $Type: 'UI.DataField',
    Label: 'ID',
    Value: ID
  },
  {
    $Type: 'UI.DataField',
    Label: 'title',
    Value: title
  },
  {
    $Type: 'UI.DataField',
    Label: 'stock',
    Value: stock
  }
]
@UI.FieldGroup#GeneratedGroup1 : {
  $Type: 'UI.FieldGroupType',
  Data: [
    {
      $Type: 'UI.DataField',
      Label: 'ID',
      Value: ID
    },
    {
      $Type: 'UI.DataField',
      Label: 'title',
      Value: title
    },
    {
      $Type: 'UI.DataField',
      Label: 'stock',
      Value: stock
    }
  ]
}
/*
@UI.Facets : [
  {
    $Type: 'UI.ReferenceFacet',
    ID: 'GeneratedFacet1',
    Label: 'General Information',
    Target: {  }
  }
]
*/
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.UpdateRestrictions.Updatable : false
entity cf26.Books {
  key ID : Integer not null;
  title : LargeString;
  stock : Integer;
};

@cds.external : true
service cf26 {};

