/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];

    //Replace the name and add your logic in the function
    msLinq.addFunc('average',function(clause){   
        //Transfer clause to function
        var func = clause||function(i){return i;};
        func = msLinq.func(func);
        
        var sum = 0;       
        this.each(function(item){
            sum += func(item);
        });
         
        return sum/this.items.length; 
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");