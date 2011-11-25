/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    //Replace the name and add your logic in the function
    msLinq.addFunc('defaultIfEmpty',function(defaultValue){   
        if (this.items.length == 0) {
            return defaultValue;
        }
        return this; 
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");