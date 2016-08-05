/// <reference path="../typings/index.d.ts" />
describe('crux test [ base connections ]', function () {
    it('should find jquery', function () {
        expect($).not.toBeNull();
    });
    it('should connect to crix ', function () {
        var crix = new crisx();
        expect(crix.isConnected()).toBeTruthy();
    });
    it('should trigger a valid target to crisx', function () {
        var crix = new crisx();
        expect(crix.isValidInput()).toBeTruthy();
    });
});
describe('selection and base validation area ', function () {
    beforeEach(function () {
        setFixtures("<div style='height:100px' class='test' id='target'>" +
            "<p>this is the main " +
            "<div id='fit'> child class of fit </div></div>");
    });
    it('should validate input terGet is a selector ', function () {
        var crix = new crisx(".test");
        expect(crix.isValidInput()).toBe("ok");
    });
    it('should make the of the terGet height same of the  parent ', function () {
        var crix = new crisx(".test");
        expect(crix.fit()).toBe(100);
    });
});

//# sourceMappingURL=source/unit.js.map
