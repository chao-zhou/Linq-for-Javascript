/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    msLinq.addFunc('aggregate',function(clause){
        var length = length = this.items.length;
        
        if(length < 2)
            return this.items;
        
        var func = msLinq.func(clause);
        var val = this.items[0];
        for (var index = 1; index < length; index++) {
            val = func(val,this.items[index]);
        };
        
        return val;
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");