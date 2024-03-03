//creating a div element 
var div = document.createElement("div");
div.style.textAlign="center";
div.style.margin="60px";

//creating a input element 
var input = document.createElement("input");
input.id="text"
input.style.width="30%"
input.style.borderRadius="30px"
input.style.padding="20px"
input.style.marginRight="20px";
// input.setAttribute("oninput", "getval()");
input.setAttribute("type","text")
input.setAttribute("placeholder","Search meaning for the word")

//creating a Button element 
var button = document.createElement("button");
button.innerHTML="Check Definition!!!"
button.setAttribute("onclick","getval()")
button.className="btn btn-primary"

//Appending to the html file
div.append(input,button)
document.body.append(div)

//Getting the values from the date input
function getval(){
var val =document.getElementById("text").value;
console.log(val)

foo(val);
}

//Passing the values to the api by the vales got from th date input
async function foo(val){
    try{
        var res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
    var res1 = await res.json();
    console.log(res1)
    if(res1[0].meanings[0].definitions[0].definition===" "){
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        div1.innerHTML=
        `Check the word that you typed!!!"`;
        document.body.append(div1)
        }
    else{
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        div1.innerHTML=
        `
         <h4>Definition : ${res1[0].meanings[0].definitions[0].definition }</h4>`
        document.body.append(div1)
    }
   
    }
    catch(error){
        console.log(error)
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        div1.innerHTML=
        `Error : ${error}`;
        document.body.append(div1)
    }
    
}




