/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    //Replace the name and add your logic in the function
    msLinq.addFunc('name',function(clause){   
        //Transfer clause to function
        var func = msLinq.func(clause);
        
        //You can use this.items to get each item
        //Ex: var first = this.items[0];
      
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");