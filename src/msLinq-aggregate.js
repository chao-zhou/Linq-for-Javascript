/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    msLinq.addFunc('aggregate',function(clause){
        var func = msLinq.func(clause);
        var val = this.items[0]; 
        this.each(function(item,index){
            if(index>0){val = func(val,item);}
        })
        
        return val;
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");