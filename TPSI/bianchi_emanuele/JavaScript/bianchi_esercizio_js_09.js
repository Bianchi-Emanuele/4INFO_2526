console.log("prova")

let pwd
let nome = prompt("USERNAME:")
nome == null &&  alert("Cancel")
nome != null && (nome == "Admin" || alert("I don't know"));
nome == "Admin" && (pwd = prompt("PASSWORD"))
nome == "Admin" && pwd == null && alert("Cancel")
nome == "Admin" && pwd != null && pwd == "Agnell1no" || alert("Wrong Password")
nome == "Admin" && pwd == "Agnell1no" && alert("Welcome")
 
/*
let nome = prompt("USERNAME:")
if(nome != "Admin")
{
    alert("i don't know")
}
else
{
    let password = prompt("inserisci la password");
    if(password != "Agnell1no")
    {
        alert("wrong password");
    }
    else
    {
        alert("welcome");
    }
}
*/