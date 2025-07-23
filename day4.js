//function Say(){
    //let name="Javascript"
    //console.log("Hi global scope");
    //console.log("Within the func "+name);
//}
//Say()
function text(){
    console.log("message");
}
text();
function send(callback){
    console.log("message sended");
    setInterval(callback,3000);
}
send(text);
let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count < 5){
        Interval();
    }

}
Interval();
