sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cf30c/test/integration/FirstJourney',
		'cf30c/test/integration/pages/Ent1List',
		'cf30c/test/integration/pages/Ent1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, Ent1List, Ent1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cf30c') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEnt1List: Ent1List,
					onTheEnt1ObjectPage: Ent1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);