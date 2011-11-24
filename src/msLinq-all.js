/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    msLinq.addFunc('all',function(clause){      
        var func = msLinq.func(clause);
        var rslt = true;
        
        this.each(function(item){
           if(!func(item)){
               rslt = false;
               return false;
           }            
           return true;
        });
        
        return rslt;
        
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");