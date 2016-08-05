/// <reference path="../../typings/globals/jquery/index.d.ts" />
var crisx = (function () {
    function crisx(tarGet) {
        this.config = {
            "info": {
                "name": "crystal",
                "des": "this is the js runner for crestal",
                "ver": "0.0.0.1"
            },
            "elem": {}
        };
        this.config.elem['call'] = tarGet;
    }
    crisx.prototype.isConnected = function () { return true; };
    crisx.prototype.isValidInput = function () {
        var elm = this.config.elem.call;
        if (typeof (elm) === 'string') {
            if ($(elm).length > 0) {
                return 'ok';
            }
        }
        return 'no';
    };
    crisx.prototype.fit = function () {
    };
    return crisx;
}());

//# sourceMappingURL=source/main.js.map
