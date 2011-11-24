/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    msLinq.addFunc('any',function(clause){   
        if(!this.items || this.items.length < 1)
            return false;
        
        var rslt = false;
        var func = clause||function(){return true;};
        func = msLinq.func(func);

        this.each(function(item,index){ 
            if (func(item, index)) { 
                rslt = true;
                return false; 
        }});
        
      
        return rslt;
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");