sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cf6elem1/test/integration/pages/MainListReport' ,
        'cf6elem1/test/integration/pages/MainObjectPage',
        'cf6elem1/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cf6elem1') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);