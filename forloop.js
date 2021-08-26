//About For Loop
//for loop intialization
var i;
for(i=0;i<=5;i++)
{
    console.log(i);
}
//for loop with array
var arry=[1,2,3,4,5];
    for(i=0;i<=arry.length;i++)
    {
        console.log(arry[i]);
    }
 //for with break
 for(var pravali=1;pravali<=10;pravali=pravali+2) 
      {
        if (pravali===7) {
            break;//break the code
        }
        console.log("satya is" +pravali);
    }
 //for of loop
    let arr = [ "fred", "tom", "bob" ];
       for (let i of arr) {
        console.log(i);
    }
//for in loop
    var names =  { 
      a: "pravali", //objects declaration
      b: "satya", 
      c: "mouni"
    };
    var xyz = "";
    var key;
    for (key in names) {
        xyz +=key+":" + names[key];
        xyz =xyz;
        }
    console.log(xyz);