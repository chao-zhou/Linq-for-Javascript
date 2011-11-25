/**
 * 
 */

//Notice: Please add a new line in test.js to load this js file
//Ex: loadJs("test/filename");
(function(window,namespace){
    var msLinq = window[namespace];
     
    var test = msLinq(new Array(1,2,3));
    
    out('Test msLinq().count')
    isEqual({
        val1:test.count(),
        val2:3,
        msg:'test.count()'
    });
    
    isEqual({
        val1:test.count(function(i){return i>1;}),
        val2:2,
        msg:'test.count(function(i){return i>1;})'
    });
    
    isEqual({
        val1:test.count("i=>i>1"),
        val2:2,
        msg:'test.count("i=>i>1")'
    });
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");