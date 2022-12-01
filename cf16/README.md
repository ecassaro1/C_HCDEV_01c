# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


query: 'SELECT lp_ID AS "lp_ID", ID AS "ID", title AS "title", "LENGTH" AS "length" FROM CatalogService_Tracks T1 WHERE ( EXISTS ( SELECT 1 FROM CatalogService_Lps T0 WHERE T0.ID = 3 AND ) ) ORDER BY lp_ID ASC, ID ASC LIMIT 1000 OFFSET 0',