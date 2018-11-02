var HtmlReporter=require('protractor-beautiful-reporter')
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['secondtest.js'],
  
//  capabilities: {
//	  'browserName': 'firefox'
//  },
  
 multiCapabilities: [{'browserName': 'firefox'}, {'browserName': 'chrome'}],
  
  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());
  }
};