/**
 * 
 */

(function(window, namespace) {
    var msLinq = window[namespace] = function(dataItems) {
        if (!(this instanceof msLinq)) {
            return new msLinq(dataItems);
        }

        this.items = dataItems;
    };

    msLinq.isFunc = function(func) {
        return (typeof func).toLowerCase() == 'function';
    };

    msLinq.addFunc = function(name, func, override) {
        if (!msLinq.isFunc(func))
            return false;

        if (msLinq.prototype[name] && !override)
            return false;

        this.prototype[name] = func;

    };

    msLinq.removeFunc = function(name) {
        if (!msLinq.prototype[name])
            return false;

        delete this.prototype[name];
        return true;
    };
    
    //default version only support function
    msLinq.func = function(clause){
        if(!msLinq.isFunc(clause)){
            throw "Only support function";
        }
        return clause;
    }
})(this.window || exports, this.window === this ? "msLinq" : "Exec");