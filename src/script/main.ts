/// <reference path="../../typings/globals/jquery/index.d.ts" />

class crisx {
    public config:any = {
        "info":{
            "name":"crystal",
            "des":"this is the js runner for crestal",
            "ver":"0.0.0.1"
        },
        "elem":{}
    }
    constructor(tarGet:string) {
       this.config.elem['call'] = tarGet;
    }
    isConnected(){ return true; }
    isValidInput(){
        var elm = this.config.elem.call;
        if(typeof(elm) === 'string'){
                if($(elm).length > 0){
                    return 'ok';
                }
        }
       return 'no';
    }
    fit(){
        
    }
}