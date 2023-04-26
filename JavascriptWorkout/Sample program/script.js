var a= document.getElementById("head1");
document.write(a.innerHTML);

const car={
    type:"suv",
    model:2019,
    color:"white",
    detail: function(){
        return this.type + " " + this.model + this.color;
    }
};
car.type="sedan"


let fruits=["grape","orange","apple"];
let num=fruits.length;
let text="<ul>";
for(let x=0;x<num;x++){
text+="<li>" + fruits[x] +  "</li>";
}
text+="</ul>";
document.getElementById("cars").innerHTML=text;
document.getElementById("mybtn").addEventListener("click",myfunc);
function myfunc(){
    document.querySelector("p").style.backgroundColor="red";
}


// function clickable(){
//     let fn = document.getElementsByName("fname");
//     let sn = document.getElementsByName("sname");
//     document.getElementById("demo").innerHTML = fn[0].value + " " + sn.value;
//     // for(let i=0;i<2;i++){
//     // document.getElementById("demo").innerHTML = elements[i].value + "<br>";
//     // document.write();
//     // }
//     }

function samplfunc(){
    var a=document.getElementById("sample").value;
    document.getElementById("sam").innerHTML="HEllo" + a;
}