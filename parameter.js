//passing parameters
function passingparameters(par1,par2,par3) 
        {
            if(par1 > par2) 
            {
                  return par1;
            } else {
                    return par3;
                 }
                }
        console.log(passingparameters(4, 50, 6));
//Arrow Function
 const z=(x,y)=>{return x*y};
 console.log(z(10,20));
 //callback function
function greeting(name,callback){
    console.log("Hi" + '<br>' + name);
    callback();
}
function callMe(){
    console.log("I am callback function");
}
greeting("satya", callMe);