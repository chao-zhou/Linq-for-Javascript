/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    msLinq.addFunc('all',function(clause){      
        var func = msLinq.func(clause);
        for (var index = 0, length = this.items.length; index < length; index++) {
            if (!func(this.items[index])) { return false; }
        }
        return true;
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");