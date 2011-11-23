/**
 * 
 */

//Notice: Please add a new line in test.js to load this js file
//Ex: loadJs("test/filename");
(function(window,namespace){
    var msLinq = window[namespace];
     
    //TODO: Add you code there for more detial please see test-base.js
    //Ex:out("helllo");
    //   isEqual({
    //      val1:actual,
    //      val2:expect,
    //      strict:true,
    //      pass:'passed : function',
    //      fail:'failed : function',
    //      });   
    var test = msLinq(new Array(1,2,3,4,5,6,7,8,9));
    
    isEqual({
        val1:test.all("i=>i<10"),
        val2:true,
        msg:'test.all("i=>i<10")'
    });
    
    isEqual({
        val1:test.all("i=>i<9"),
        val2:false,
        msg:'test.all("i=>i<9")'
    });
    
    test = msLinq(new Array());
    isEqual({
        val1:test.all("i=>i>0"),
        val2:true,
        msg:'test.all("i=>i>0") test have no item'
    });
    
})(this.window || exports, this.window === this ? "msLinq" : "Exec");