sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cf18.lr1.lr1',
            componentId: 'BooksList',
            entitySet: 'Books'
        },
        CustomPageDefinitions
    );
});