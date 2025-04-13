 let s1=document.querySelector("#s1");
 let sel1=0;
 let sel2=0;
 let a;
 let b;
 for(let i in countryList){
    let a1=document.createElement("option"); 
    if(i!="USD"){
    a1.innerText=i
    s1.append(a1);
    }
}
let s2=document.querySelector("#s2");
for(let i in countryList){
   let a1=document.createElement("option"); 
   if(i!="INR"){
   a1.innerText=i
   s2.append(a1);
   }
}
function flag1(){
    let i1=document.querySelector("#i1");
    a=countryList[s1.value];
    i1.src=`https://flagsapi.com/${a}/shiny/64.png`
}
s1.addEventListener("change",flag1);
function flag2(){
    let i2=document.querySelector("#i2");
     b=countryList[s2.value];
    i2.src=`https://flagsapi.com/${b}/shiny/64.png`
}
s2.addEventListener("change",flag2);

let p;
let rate;


async function promisee() {
    a=s1.value.toLowerCase();
    b=s2.value.toLowerCase();
    
 const URL =`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${a}.json`;

 let prom= await fetch(URL);
 p= await prom.json();
 rate=p[a][b];
  let con = document.querySelector("#con");
    con.innerText = `1 ${a.toUpperCase()} = ${rate} ${b.toUpperCase()}`;
    let en = document.querySelector("#en").value;
    if(en<=0){
        en=1;
        document.querySelector("#en").value = "1.00";

    }
    let am= document.querySelector("#am");
    let amount=(rate*en);
    am.innerText=`Total Amount = ${amount} ${b.toUpperCase()}`;
    
}
promisee();
document.querySelector("button").addEventListener("click",promisee);
