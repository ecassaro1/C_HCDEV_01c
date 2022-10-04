using { cf6 as db } from '../db/schema';

service AdmService {
/*    
  @Capabilities: {
    InsertRestrictions.Insertable: true,
    UpdateRestrictions.Updatable: true,
    DeleteRestrictions.Deletable: false
  }
  @(requires: 'authenticated-user')
  @(restrict: [
      { grant: 'READ', to: 'any' },
      { grant: 'UPDATE', to: 'any', where: 'ID = 1' }
    ])
*/
  entity Ent1 as projection on db.Ent1;
}