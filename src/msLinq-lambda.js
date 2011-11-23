/**
 * 
 */

//Current version do not support ()=>, (a,b,c)=>, you can use => instead of ()=>

(function(window,namespace){
    var msLinq = window[namespace];
    
    msLinq.isLambda = function(exp) {
        if((typeof exp).toLowerCase() == 'string'){
            var pattern = '((?:^([a-zA-Z][,_a-zA-Z0-9]*|^[ ]*)=>.*)|(?:^\\(([a-zA-Z][,_a-zA-Z0-9]*|[ ]*)\\)=>.*))';
            return !!(exp.match(pattern));
        }       
        return false; 
    };
    
    msLinq.lambda = function(exp){
          if(!msLinq.isLambda(exp))
              return;
        
          var argExp = exp.match('\\(?(.*?)\\)?=>')[1];
          var bodyExp = exp.match('=>(.*)')[1];
          var logicExp = bodyExp.match('{.*}');
          
          if(!argExp){
              argExp = '';
          }
          
          if(!logicExp){
              logicExp = '{return '+bodyExp +'}'; 
          }
                 
          return function(){
              var funcString = '(function('+argExp+')'+logicExp+').apply(this,arguments)';
              return eval(funcString);
          }; 
    }; 
    
   
    
    //override default func function
    msLinq.func = function(clause){
        if(msLinq.isLambda(clause)){
            return this.lambda(clause);
        }
        
        if(msLinq.isFunc(clause)){
            return clause;
        }
        
        throw "Only support functon and lambda.";
    }
})(this.window || exports, this.window === this ? "msLinq" : "Exec");