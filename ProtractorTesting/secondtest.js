describe("This is my second test", function() {

	
	it("This will add 2 numbers", function() {
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		
		expect(element(by.className("ng-binding")).getText()).toEqual("9");
	})
})