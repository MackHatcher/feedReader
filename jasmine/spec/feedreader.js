/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("has url defined and isn't empty", () => {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name defined and isnt empty', () =>{
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
        
    });


    /* TODO: Write a new test suite named "The menu" */
     // Testing suite of Menu
  describe("The Menu", function() {

    // Pre-define elements needed for testing hiding/showing of the menu
    
    let menu = document.querySelector(".menu-icon-link");
    let body = document.body;
    
    // Make sure the menu is hidden initially
    it("body has 'menu-hidden' initially", function() {
      expect(body.className).toContain("menu-hidden");
    });

    // Make sure menu icon toggles hide/show on clicking
    it("body toggles the class 'menu-hidden' on clicking menu icon", function() {
      menu.click();
      expect(body.className).not.toContain("menu-hidden");

      menu.click();
      expect(body.className).toContain("menu-hidden");
    });
  });



    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial entries", () => {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
         /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */

        it('has at least 1 entry after loadFeed function gets called', function (done) {
            let entries = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(entries).toBeGreaterThan(0);
            done();
        });
    });
        /* TODO: Write a new test suite named "New Feed Selection" */

            /* TODO: Write a test that ensures when a new feed is loaded
            * by the loadFeed function that the content actually changes.
            * Remember, loadFeed() is asynchronous.
            */

    describe("New Feed Selection", () => {
        let initFeed;
        beforeEach(function (done) {
            loadFeed(0, () => {
                initSelection = document.querySelector('.feed').innerHTML;
                loadFeed(1, function () {
                    done();
                });
            });
        });

        it('changes its loaded content', function (done) {
            let newFeed = document.querySelector('.feed').innerHTML;
            expect(initFeed).not.toBe(newFeed);
            done();
        });
    });
   

   
}());