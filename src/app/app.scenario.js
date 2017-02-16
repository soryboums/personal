/*
 * This is an e2e test suite.
 */

describe( 'personal', function() {
  var url = '/base/build/index.html';
  describe( 'landing page', function() {

    it( 'initial state', function () {
      // Trigger state change: Load page
      browser().navigateTo(url);
    });
  });
});