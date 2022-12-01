namespace cf16;

entity StandardEntity {
  key ID : Integer;
}

entity Lps: StandardEntity {
  title: String;
  author: Association to Authors;
  Tracks: Composition of many Tracks;
}

aspect Tracks: StandardEntity {
  key lp : Association to Lps;
  title: String;
  length: Integer;
}

@cds.autoexpose
entity Authors: StandardEntity {
  name: String;
  lps: Association to many Lps on lps.author=$self;
}
