/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    //Replace the name and add your logic in the function
    msLinq.addFunc('count',function(clause){   
        //Transfer clause to function
        var func = clause||function(){return true};
        func = msLinq.func(func);
        
        var count = 0;
        this.each(function(item){
            if(func(item))
                count +=1;
        });
      
        return count;
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");