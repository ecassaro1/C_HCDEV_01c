este repo consome o cf35a, via external API import

as partes interessantes estão nos seguintes files:
    package.json
        cds/requires
    service.js
    service.cds

no cf35a
    cds compile srv -s CatalogService -2 edmx -o srv\external

no cf35c
    cds import ..\cf35a\srv\external\CatalogService.xml --as cds