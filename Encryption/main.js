document.querySelector("#encrypt").addEventListener("click",encrypt);
document.querySelector("#decrypt").addEventListener("click",decrypt);
const enc = document.getElementById("inp").value;
let l = enc.length;
function encrypt(){
    // console.log(enc);
    let res = "";
    let n,x ;
    for(let i in enc){
       n = parseInt(enc.charCodeAt(i));
       x = n - 27;
       res = res +  x.toString(8)  + "%";
       //console.log(res);
    }
    document.getElementById('res').innerHTML = res;
    
}
function decrypt(){
    
     let finalres = "";
     for(let i=0;i<l;i = i+4){
          let rev = 0;
          for(let j = i;j<i+3;j++){
               if(enc[j] =='%'){
                    continue;
               }
               rev = rev*10 + parseInt(enc[j],8);
              
          }
          //console.log(rev);
          let nx =parseInt(rev,8);
          let final  = parseInt(nx + 27,10);
          console.log(nx + 27);
          finalres = finalres + String.fromCharCode(final);
          //console.log(finalres);
         
     }
     document.getElementById('res').innerHTML = finalres;
    
}


