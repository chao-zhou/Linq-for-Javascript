/**
 * 
 */

//Notice: Please add a new line in test.js to load this js file
//Ex: loadJs("test/filename");
(function(window,namespace){
    var msLinq = window[namespace];
     
    var test = msLinq();
    
    out('Test msLinq().defaultIfEmpty')
    isEqual({
        val1:test.defaultIfEmpty(),
        val2:undefined,
        msg:'test.defaultIfEmpty()'
    });
    
    isEqual({
        val1:test.defaultIfEmpty(0),
        val2:0,
        msg:'test.defaultIfEmpty(0)'
    });
    
    var test2 = msLinq(new Array(1,2,3))
    isEqual({
        val1:test2.defaultIfEmpty(1).items,
        val2:'1,2,3',
        msg:'test.defaultIfEmpty(1)'
    });
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");