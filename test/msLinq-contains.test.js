/**
 * 
 */

//Notice: Please add a new line in test.js to load this js file
//Ex: loadJs("test/filename");
(function(window,namespace){
    var msLinq = window[namespace];
    
    var test = msLinq(new Array(1,2,3));
    
    isEqual({
        val1:test.contains(2),
        val2:true,
        msg:'test.contain(2)'
    });
    
    isEqual({
        val1:test.contains('2'),
        val2:false,
        msg:'test.contain("2")'
    });
    
    isEqual({
        val1:test.contains(),
        val2:false,
        msg:'test.contain()'
    });
    
    isEqual({
        val1:test.contains(4,function(val,item){
            return (val-1) === item;
        }),
        val2:true,
        msg:'test.contain(4,function(val,item){return (val-1) === item;})'
    });
    
    isEqual({
        val1:test.contains(4,'i,j=>(i-1)===j'),
        val2:true,
        msg:'test.contain((4,"i,j=>(i-1)===j")'
    });
    
   
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");