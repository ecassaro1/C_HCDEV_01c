sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cf6elem1',
            componentId: 'Ent1List',
            entitySet: 'Ent1'
        },
        AdditionalCustomListReportDefinition
    );
});