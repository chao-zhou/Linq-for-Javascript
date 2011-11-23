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
    //      pass:'function:passed',
    //      fail:'function:failed',
    //      });   
    
    //msLinq.isFunc
    out("Test msLinq.isFunc ")
    isEqual( {
        val1:msLinq.isFunc(function(){}),
        val2:true,
        strict:true,
        msg:"msLinq.isFunc function(){}",
    });
    
    isEqual( {
        val1:msLinq.isFunc("abc"),
        val2:false,
        strict:true,
        msg:"msLinq.isFunc 'abc'",
    });
    
    isEqual( {
        val1:msLinq.isFunc(123),
        val2:false,
        strict:true,
        msg:"msLinq.isFunc 123",
    });
    isEqual( {
        val1:msLinq.isFunc({}),
        val2:false,
        strict:true,
        msg:"msLinq.isFunc {}",
    });
    
    isEqual( {
        val1:msLinq.isFunc(undefined),
        val2:false,
        strict:true,
        msg:"msLinq.isFunc undefined",
    });
    
    isEqual( {
        val1:msLinq.isFunc(null),
        val2:false,
        strict:true,
        msg:"msLinq.isFunc null",
    });
    
    //msLinq.addFunc
    out("Test msLinq.addFunc ")
    msLinq.addFunc('testNewFunc',function(){});
    isEqual( {
        val1:!!msLinq()['testNewFunc'],
        val2:true,
        msg:"msLinq.addFunc('testNewFunc',function(){})",
    });
    
    //msLinq.removeFunc
    out("Test msLinq.removeFunc ")
    msLinq.removeFunc('testNewFunc');
    isEqual( {
        val1:!!msLinq()['testNewFunc'],
        val2:false,
        msg:"msLinq.removeFunc('testNewFunc')",
    });
    
   
    //msLinq.func
    out("Test msLinq.func ")
    var oFunc = function(){return 1;}
    isEqual( {
        val1:msLinq.func(oFunc)(),
        val2:1,
        msg:'msLinq.func(new function(){return 1;})'
    });
    
    catchException( {
        exec:msLinq.func,
        params:{},
        //err_msg:'Only support function',
        msg:"msLinq.func({})"
    });
     
    catchException( {
        exec:msLinq.func,
        params:1,
        //err_msg:'Only support function',
        msg:"msLinq.func(1)"
    });
    
    catchException( {
        exec:msLinq.func,
        params:'123',
        //err_msg:'Only support function',
        msg:"msLinq.func('123')"
    });
    
    catchException( {
        exec:msLinq.func,
        params:undefined,
        //err_msg:'Only support function',
        msg:"msLinq.func(undefined)"
    });
    
    catchException( {
        exec:msLinq.func,
        params:null,
        //err_msg:'Only support function',
        msg:"msLinq.func(null)"
    });

})(this.window || exports, this.window === this ? "msLinq" : "Exec");