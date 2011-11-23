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
        for (var index = 0, length = this.items.length; index < length; index++) {
            sum += func(this.items[index]);
        }
        
        return sum/this.items.length; 
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");