sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cf18/lr1/lr1/test/integration/FirstJourney',
		'cf18/lr1/lr1/test/integration/pages/BooksList',
		'cf18/lr1/lr1/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cf18/lr1/lr1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);