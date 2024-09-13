sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cf30c',
            componentId: 'Ent1List',
            contextPath: '/Ent1'
        },
        CustomPageDefinitions
    );
});