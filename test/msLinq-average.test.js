/**
 * 
 */

//Notice: Please add a new line in test.js to load this js file
//Ex: loadJs("test/filename");
(function(window,namespace){
    var msLinq = window[namespace];
    
    var test = msLinq(new Array(1,2,3,4));
    out("Test msLinq().average ")
    isEqual({
        val1:test.average(),
        val2:2.5,
        strict:true,
        msg:'test.average()'
     });   
    
    isEqual({
        val1:test.average("i=>i+1"),
        val2:3.5,
        strict:true,
        msg:'test.average("i=>i+1")'
     });  
    
    isEqual({
        val1:test.average(function(i){return i*2;}),
        val2:5,
        strict:true,
        msg:'test.average(function(i){return i*2;})'
     });  
    
    catchException( {
        exec:test.average,
        params:"i=>i+'a'",
        msg:"test.average(i=>i+'a')"
    });
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");