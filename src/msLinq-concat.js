/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    //Replace the name and add your logic in the function
    msLinq.addFunc('concat',function(sequence){   
        var items1 = this.items;
        var items2 = undefined;
        if (sequence instanceof msLinq) {
            items2 =  sequence.items;
        }else{
            items2 =  msLinq(sequence).items;
        }
        
        var newItems = items1.slice(0);
        for(var index=0, length = items2.length;index<length;index++){
            newItems.push(items2[index]);
        }
        
        return msLinq(newItems);
      
    });
      
})(this.window || exports, this.window === this ? "msLinq" : "Exec");