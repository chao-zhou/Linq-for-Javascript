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
    
  //msLinq.isLambda
    out("Test msLinq.isLambda ")
    isEqual( {
        val1:msLinq.isLambda('=>1'),
        val2:true,
        strict:true,
        msg:"msLinq.isLambda('=>1')",
    });
    
    isEqual( {
        val1:msLinq.isLambda('a=>{var a=a*a; return a;}'),
        val2:true,
        strict:true,
        msg:"msLinq.isLambda('a=>{var a=a*a; return a;}')",
    });
  
    isEqual( {
        val1:msLinq.isLambda('a=>a'),
        val2:true,
        strict:true,
        msg:"msLinq.isLambda('a=>a')",
    });
    
    isEqual( {
        val1:msLinq.isLambda('a,b=>a+b'),
        val2:true,
        strict:true,
        msg:"msLinq.isLambda('a,b=>a+b')",
    });
    
    isEqual( {
        val1:msLinq.isLambda('()=>1'),
        val2:true,
        strict:true,
        msg:"msLinq.isLambda('()=>1')",
    });
    
    isEqual( {
        val1:msLinq.isLambda('(a)=>a'),
        val2:true,
        strict:true,
        msg:"msLinq.isLambda('(a)=>a')",
    });
    
    isEqual( {
        val1:msLinq.isLambda('(a,b)=>a+b'),
        val2:true,
        strict:true,
        msg:"msLinq.isLambda('(a,b)=>a+b')",
    });
    
    isEqual( {
        val1:msLinq.isLambda('12=>1'),
        val2:false,
        strict:true,
        msg:"msLinq.isLambda('12=>1')",
    });
    
    out("Test msLinq.lambda ")
    //msLinq.lambda 
    isEqual( {
        val1:msLinq.lambda("=>1")() ,
        val2:1,
        strict:true,
        msg:"msLinq.lambda('=>1')()",
    });
    
    isEqual( {
        val1:msLinq.lambda("a=>a")(2) ,
        val2:2,
        strict:true,
        msg:'msLinq.lambda("a=>a")(2)',
    });
    
    isEqual( {
        val1:msLinq.lambda('a,b=>a+b')(1,2),
        val2:3,
        strict:true,
        msg:"msLinq.lambda('a,b=>a+b')(1,2)",
    });
    
    isEqual( {
        val1:msLinq.lambda("a=>{var a=a*a; return a;}")(2) ,
        val2:4,
        strict:true,
        msg:'msLinq.lambda("a=>{var a=a*a; return a;}")(2)',
    });
    
    isEqual( {
        val1:msLinq.lambda('(a,b)=>a+b')(1,2),
        val2:3,
        strict:true,
        msg:"msLinq.lambda('(a,b)=>a+b')(1,2)",
    });
    
 
  //msLinq.func
    out("Test msLinq.func ")
    var oFunc = function(){return 1;}
    isEqual( {
        val1:msLinq.func(oFunc)(),
        val2:1,
        msg:'msLinq.func(new function(){return 1;})'
    });
    
    isEqual( {
        val1:msLinq.func("a=>a")(1),
        val2:1,
        msg:'msLinq.func("a=>a")(1),'
    });
    
    catchException( {
        exec:msLinq.func,
        params:{},
        err_msg:'Only support functon and lambda.',
        msg:"msLinq.func({})"
    });
     
    catchException( {
        exec:msLinq.func,
        params:1,
        err_msg:'Only support functon and lambda.',
        msg:"msLinq.func(1)"
    });
    
    catchException( {
        exec:msLinq.func,
        params:'123',
        err_msg:'Only support functon and lambda.',
        msg:"msLinq.func('123')"
    });
    
    catchException( {
        exec:msLinq.func,
        params:undefined,
        err_msg:'Only support functon and lambda.',
        msg:"msLinq.func(undefined)"
    });
    
    catchException( {
        exec:msLinq.func,
        params:null,
        err_msg:'Only support functon and lambda.',
        msg:"msLinq.func(null)"
    });
  
})(this.window || exports, this.window === this ? "msLinq" : "Exec");/**
 * 
 */