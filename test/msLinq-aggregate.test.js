/**
 * 
 */
(function(window,namespace){
    var msLinq = window[namespace];
    
    var str = 'a,b,c';
    var obj = msLinq(str.split(','));
    
    var val = '';
    var expect = 'c,b,a';
    
    out("Test msLinq.aggregate ")
    val = obj.aggregate(function(seq,next){return next+','+seq;});
    isEqual({
        val1:val,
        val2:expect,
        strict:true,
        msg:'aggregate function(seq,next){return next+","+seq;}',
    });
    
    val = obj.aggregate("w,n=>n+','+w");
    isEqual({
        val1:val,
        val2:expect,
        strict:true,
        msg:'aggregate w,n=>n+",""+w',
    });
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");