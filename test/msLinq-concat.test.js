/**
 * 
 */

//Notice: Please add a new line in test.js to load this js file
//Ex: loadJs("test/filename");
(function(window,namespace){
    var msLinq = window[namespace];

    var test1 = msLinq(new Array(1,2,3));
    var test2 = msLinq(new Array(3,4,5));
    var test3 = new Array(3,4,5);
    
    out("Test msLinq().concat ")
    isEqual({
        val1:test1.concat(test2).items,
        val2:'1,2,3,3,4,5',
        msg:'test1.concat(test2).items'
    })
    
    isEqual({
        val1:test1.concat(test3).items,
        val2:'1,2,3,3,4,5',
        msg:'test1.concat(test3).items'
    })
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");