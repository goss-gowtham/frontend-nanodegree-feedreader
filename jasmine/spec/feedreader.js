/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions,  the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(!!allFeeds).toBeTruthy();  //Updated as per Reviewer suggestion plus sof referrance https://stackoverflow.com/questions/32615713/tobetrue-vs-tobetruthy-vs-tobetrue
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined', () => {
           for (feed of allFeeds) { //testing with URL
             expect(!!feed.url).toBeTruthy();
           }
         });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', () => {
           for (feed of allFeeds) { //testing with name
             expect(!!feed.name).toBeTruthy();
           }
         });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', () => {
        let menuIcon = $('.menu-icon-link');    //I'm unable to retrieve menuIcon variable from app.js,  so declaring here once again.
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('ensures menu hidden by default', () => {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('ensures visibility when menu icon is clicked', () => {
            $(menuIcon).click();  //referred from https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click
            //shows when clicked
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $(menuIcon).click();
            //hides when clicked
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });
    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work,  there is at least
         * a single .entry element within the .feed container.
         * Remember,  loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach( (done) => {
           loadFeed(0,done);
         });
         it('ensures loadFeed function is done', () => {
           expect($('.feed .entry').length > 0).toBe(true);   //corrected as per Reviewer suggestion
         });
       });

    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
        beforeEach( (done) => {
          loadFeed(0, () => {
            oldFeed = $('.feed').html();    //has the old content before clicking another feed
            loadFeed(1,done);
          });
        });

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember,  loadFeed() is asynchronous.
         */
         it('checks content is updated', () => {
           expect($('.feed').html()).not.toBe(oldFeed);   //tests if the content is updated
         });
       });
}());
//Loved working with this Testing as it's new and interesting!
