/// <reference path="../typings/index.d.ts" />
describe('crux test [ base connections ]', () => {
    it('should find jquery', () => {
        expect($).not.toBeNull();
    });
    it('should connect to crix ', () => {
        var  crix = new crisx();
        expect(crix.isConnected()).toBeTruthy();
    });
    
    it('should trigger a valid target to crisx', () => {
        var  crix = new crisx();
        expect(crix.isValidInput()).toBeTruthy();
    });
          
});

describe('selection and base validation area ', () => {
        beforeEach(function () {
            setFixtures(
                "<div style='height:100px' class='test' id='target'>" +
                    "<p>this is the main "+
                    "<div id='fit'> child class of fit </div></div>"
            );
        });
    it('should validate input terGet is a selector ', () => {
        var  crix = new crisx(".test");
        expect(crix.isValidInput()).toBe("ok");
    });
    it('should make the of the terGet height same of the  parent ', () => {
        var  crix = new crisx(".test");
        expect(crix.fit()).toBe(100);
    });
});
    
    