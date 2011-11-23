/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    msLinq.addFunc('any',function(clause){   
 
        if(!this.items || this.items.length < 1)
            return false;
        
        if(!clause)
            return true;
        
        var func = msLinq.func(clause);
        for (var index = 0, length = this.items.length; index < length; index++) {
            if (func(this.items[index], index)) { return true; }
        }
        return false;
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");