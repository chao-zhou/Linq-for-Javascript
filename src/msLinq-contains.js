/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    //Replace the name and add your logic in the function
    msLinq.addFunc('contains',function(value,comparer){          
        var rslt = false;
        var func = comparer||function(val,item){return val === item;};
        func = msLinq.func(func);
        
        this.each(function(item){
            if(func(value,item)){
                rslt = true;
                return false;
            }
        });
      
        return rslt;
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");