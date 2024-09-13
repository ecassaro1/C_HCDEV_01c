sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cf30c',
            componentId: 'Ent1ObjectPage',
            contextPath: '/Ent1'
        },
        CustomPageDefinitions
    );
});