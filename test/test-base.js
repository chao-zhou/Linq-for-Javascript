/**
 * 
 */
function loadJs(jsFile){
    if (!jsFile) return;
    var oScripts = document.getElementsByTagName('script');
    for (var i=0; i<oScripts.length; i++){
        if (oScripts[i].src.indexOf(jsFile) > -1) return;
    }
    var oHead = document.getElementsByTagName('HEAD')[0];
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";
    oScript.src = jsFile;
    oHead.appendChild(oScript);
}

function out(val,style){
    var output = document.getElementById("output");
    var line = document.createElement('li');
    line.innerHTML = val;
    
    for(var key in style){
        line.style[key] = style[key];
    }
    
    output.appendChild(line);
}

function outPassed(val){
    var msg = 'Passed: '+val;
    out(msg,{ backgroundColor: 'Green'})
}

function outFailed(val){
    var msg = 'Failed: '+val;
    out(msg,{ backgroundColor: 'Red'})
}

function isEqual(config){
   try{
       var msg = config.msg+':::expect:'+config.val2+' actual:'+config.val1;
       if(config.strict){
           config.val1 == config.val2?outPassed(msg):outFailed(msg);
       }else{
           config.val1 == config.val2?outPassed(msg):outFailed(msg);
       }
   }catch(msg)
   {
       outFailed(message);
   }
}

function catchException(config){
    try{
        config.exec(config.params);
        outFailed(config.msg+' No error is thrown!')
    }catch(msg){ 
        if(!config.err_msg || msg == config.err_msg){
            outPassed(config.msg +':::'+msg);
        }else{
            outFailed(config.msg +':::'+msg);
        }
    }
}
