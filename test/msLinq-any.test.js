/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    var test = msLinq(new Array(1,2,3));
    out("Test msLinq().any ")
    isEqual({
              val1:test.any(),
              val2:true,
              strict:true,
              msg:'test.any()'
    });   
    
    isEqual({
        val1:test.any('i=>i<3'),
        val2:true,
        strict:true,
        msg:"test.any('i=>i<3')"
    });
    
    isEqual({
        val1:test.any('i=>i>4'),
        val2:false,
        strict:true,
        msg:"test.any('i=>i>4')"
    });
    
    isEqual({
        val1:test.any(function(i){return i>2;}),
        val2:true,
        strict:true,
        msg:'test.any(function(i){return i>2;})'
    });
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");