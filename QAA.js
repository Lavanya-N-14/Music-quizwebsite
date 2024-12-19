/* TO NAVIGATE */
function navpage1()
{
    window.location.href = "result.html";
}
function returnpage()
{
    window.location.href = "mainpage.html"
}
function navpage()
{
    window.location.href = "index.html";
}



/* FOR THE POINTS */
var n=0;
document.getElementsByClassName("points")[0].innerHTML=n+"/5";

/* TO SHOW THE QUESTIONS */

function showQuestion2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementsByClassName("points")[2].innerHTML=n+"/5";
    }
function showQuestion3(){
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
    document.getElementsByClassName("points")[3].innerHTML=n+"/5";
    }
function showQuestion4(){
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
    document.getElementsByClassName("points")[4].innerHTML=n+"/5";
    }
function showQuestion5(){
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
    document.getElementsByClassName("points")[5].innerHTML=n+"/5";
    }
function resultpage(){
    document.getElementById("question5").style.display = "none";
    document.getElementById("result").style.display = "block";
    
    var temp=n/5*100;
    var percentage=temp+"%";
    document.getElementsByClassName("perc")[0].innerHTML=percentage;
}


/* To check answers */
function q1(value){
    
    if(value=="rowdy"){
        document.getElementsByClassName("answer")[0].style.backgroundColor="green";
        document.getElementsByClassName("answer")[0].style.color="white";
        document.getElementsByClassName("option")[0].disabled=true;
        document.getElementsByClassName("option")[1].disabled=true;
        document.getElementsByClassName("option")[2].disabled=true;
        n=++n;
         document.getElementsByClassName("points")[1].innerHTML=n+"/5";
        }
    else if(value=="kannama"){
        document.getElementsByClassName("answer")[0].style.backgroundColor="green";
        document.getElementsByClassName("answer")[0].style.color="white";
        document.getElementsByClassName("answer")[0].disabled=true;
        document.getElementsByClassName("option")[0].style.backgroundColor="red";
        document.getElementsByClassName("option")[0].style.color="white";
        document.getElementsByClassName("option")[1].disabled=true;
        document.getElementsByClassName("option")[2].disabled=true;
        document.getElementsByClassName("points")[1].innerHTML=n+"/5";
    }
    else if(value=="thangamey"){
        document.getElementsByClassName("answer")[0].style.backgroundColor="green";
        document.getElementsByClassName("answer")[0].style.color="white";
        document.getElementsByClassName("answer")[0].disabled=true;
        document.getElementsByClassName("option")[1].style.backgroundColor="red";
        document.getElementsByClassName("option")[1].style.color="white";
        document.getElementsByClassName("option")[0].disabled=true;
        document.getElementsByClassName("option")[2].disabled=true;
        document.getElementsByClassName("points")[1].innerHTML=n+"/5";
    }
    else{
        document.getElementsByClassName("answer")[0].style.backgroundColor="green";
        document.getElementsByClassName("answer")[0].style.color="white";
        document.getElementsByClassName("answer")[0].disabled=true;
        document.getElementsByClassName("option")[2].style.backgroundColor="red";
        document.getElementsByClassName("option")[2].style.color="white";
        document.getElementsByClassName("option")[1].disabled=true;
        document.getElementsByClassName("option")[0].disabled=true;
        document.getElementsByClassName("points")[1].innerHTML=n+"/5";
    }
}

function q2(value){
    
    if(value=="leo"){
        document.getElementsByClassName("answer")[1].style.backgroundColor="green";
        document.getElementsByClassName("answer")[1].style.color="white";
        document.getElementsByClassName("option")[3].disabled=true;
        document.getElementsByClassName("option")[4].disabled=true;
        document.getElementsByClassName("option")[5].disabled=true;
        n=++n;
        document.getElementsByClassName("points")[2].innerHTML=n+"/5";
        }
    else if(value=="jailer"){
        document.getElementsByClassName("answer")[1].style.backgroundColor="green";
        document.getElementsByClassName("answer")[1].style.color="white";
        document.getElementsByClassName("answer")[1].disabled=true;
        document.getElementsByClassName("option")[3].style.backgroundColor="red";
        document.getElementsByClassName("option")[3].style.color="white";
        document.getElementsByClassName("option")[4].disabled=true;
        document.getElementsByClassName("option")[5].disabled=true;
        document.getElementsByClassName("points")[2].innerHTML=n+"/5";
    }
    else if(value=="mamannan"){
        document.getElementsByClassName("answer")[1].style.backgroundColor="green";
        document.getElementsByClassName("answer")[1].style.color="white";
        document.getElementsByClassName("answer")[1].disabled=true;
        document.getElementsByClassName("option")[4].style.backgroundColor="red";
        document.getElementsByClassName("option")[4].style.color="white";
        document.getElementsByClassName("option")[3].disabled=true;
        document.getElementsByClassName("option")[5].disabled=true;
        document.getElementsByClassName("points")[2].innerHTML=n+"/5";
    }
    else{
        document.getElementsByClassName("answer")[1].style.backgroundColor="green";
        document.getElementsByClassName("answer")[1].style.color="white";
        document.getElementsByClassName("answer")[1].disabled=true;
        document.getElementsByClassName("option")[5].style.backgroundColor="red";
        document.getElementsByClassName("option")[5].style.color="white";
        document.getElementsByClassName("option")[3].disabled=true;
        document.getElementsByClassName("option")[4].disabled=true;
        document.getElementsByClassName("points")[2].innerHTML=n+"/5";
    }
}
function q3(value){
    
    if(value=="goat"){
        document.getElementsByClassName("answer")[2].style.backgroundColor="green";
        document.getElementsByClassName("answer")[2].style.color="white";
        document.getElementsByClassName("option")[6].disabled=true;
        document.getElementsByClassName("option")[7].disabled=true;
        document.getElementsByClassName("option")[8].disabled=true;
        n=++n;
         document.getElementsByClassName("points")[3].innerHTML=n+"/5";
        }
    else if(value=="leo"){
        document.getElementsByClassName("answer")[2].style.backgroundColor="green";
        document.getElementsByClassName("answer")[2].style.color="white";
        document.getElementsByClassName("answer")[2].disabled=true;
        document.getElementsByClassName("option")[6].style.backgroundColor="red";
        document.getElementsByClassName("option")[6].style.color="white";
        document.getElementsByClassName("option")[7].disabled=true;
        document.getElementsByClassName("option")[8].disabled=true;
        document.getElementsByClassName("points")[3].innerHTML=n+"/5";
    }
    else if(value=="beast"){
        document.getElementsByClassName("answer")[2].style.backgroundColor="green";
        document.getElementsByClassName("answer")[2].style.color="white";
        document.getElementsByClassName("answer")[2].disabled=true;
        document.getElementsByClassName("option")[7].style.backgroundColor="red";
        document.getElementsByClassName("option")[7].style.color="white";
        document.getElementsByClassName("option")[6].disabled=true;
        document.getElementsByClassName("option")[8].disabled=true;
        document.getElementsByClassName("points")[3].innerHTML=n+"/5";
    }
    else{
        document.getElementsByClassName("answer")[2].style.backgroundColor="green";
        document.getElementsByClassName("answer")[2].style.color="white";
        document.getElementsByClassName("answer")[2].disabled=true;
        document.getElementsByClassName("option")[8].style.backgroundColor="red";
        document.getElementsByClassName("option")[8].style.color="white";
        document.getElementsByClassName("option")[6].disabled=true;
        document.getElementsByClassName("option")[7].disabled=true;
        document.getElementsByClassName("points")[3].innerHTML=n+"/5";
    }
}

function q4(value){
    
    if(value=="nilavukku"){
        document.getElementsByClassName("answer")[3].style.backgroundColor="green";
        document.getElementsByClassName("answer")[3].style.color="white";
        document.getElementsByClassName("option")[9].disabled=true;
        document.getElementsByClassName("option")[10].disabled=true;
        document.getElementsByClassName("option")[11].disabled=true;
        n=++n;
         document.getElementsByClassName("points")[4].innerHTML=n+"/5";
        }
    else if(value=="indian"){
        document.getElementsByClassName("answer")[3].style.backgroundColor="green";
        document.getElementsByClassName("answer")[3].style.color="white";
        document.getElementsByClassName("answer")[3].disabled=true;
        document.getElementsByClassName("option")[9].style.backgroundColor="red";
        document.getElementsByClassName("option")[9].style.color="white";
        document.getElementsByClassName("option")[10].disabled=true;
        document.getElementsByClassName("option")[11].disabled=true;
        document.getElementsByClassName("points")[4].innerHTML=n+"/5";
    }
    else if(value=="demonte"){
        document.getElementsByClassName("answer")[3].style.backgroundColor="green";
        document.getElementsByClassName("answer")[3].style.color="white";
        document.getElementsByClassName("answer")[3].disabled=true;
        document.getElementsByClassName("option")[10].style.backgroundColor="red";
        document.getElementsByClassName("option")[10].style.color="white";
        document.getElementsByClassName("option")[9].disabled=true;
        document.getElementsByClassName("option")[11].disabled=true;
        document.getElementsByClassName("points")[4].innerHTML=n+"/5";
    }
    else{
        document.getElementsByClassName("answer")[3].style.backgroundColor="green";
        document.getElementsByClassName("answer")[3].style.color="white";
        document.getElementsByClassName("answer")[3].disabled=true;
        document.getElementsByClassName("option")[11].style.backgroundColor="red";
        document.getElementsByClassName("option")[11].style.color="white";
        document.getElementsByClassName("option")[9].disabled=true;
        document.getElementsByClassName("option")[10].disabled=true;
        document.getElementsByClassName("points")[4].innerHTML=n+"/5";
    }
}

function q5(value){
    if(value=="konji"){
        document.getElementsByClassName("answer")[4].style.backgroundColor="green";
        document.getElementsByClassName("answer")[4].style.color="white";
        document.getElementsByClassName("option")[13].disabled=true;
        document.getElementsByClassName("option")[12].disabled=true;
        document.getElementsByClassName("option")[14].disabled=true;
        n=++n;
         document.getElementsByClassName("points")[5].innerHTML=n+"/5";
        }
    else if(value=="hawa"){
        document.getElementsByClassName("answer")[4].style.backgroundColor="green";
        document.getElementsByClassName("answer")[4].style.color="white";
        document.getElementsByClassName("answer")[4].disabled=true;
        document.getElementsByClassName("option")[12].style.backgroundColor="red";
        document.getElementsByClassName("option")[12].style.color="white";
        document.getElementsByClassName("option")[13].disabled=true;
        document.getElementsByClassName("option")[14].disabled=true;
        document.getElementsByClassName("points")[5].innerHTML=n+"/5";
    }
    else if(value=="thean"){
        document.getElementsByClassName("answer")[4].style.backgroundColor="green";
        document.getElementsByClassName("answer")[4].style.color="white";
        document.getElementsByClassName("answer")[4].disabled=true;
        document.getElementsByClassName("option")[13].style.backgroundColor="red";
        document.getElementsByClassName("option")[13].style.color="white";
        document.getElementsByClassName("option")[12].disabled=true;
        document.getElementsByClassName("option")[14].disabled=true;
        document.getElementsByClassName("points")[5].innerHTML=n+"/5";
    }
    else{
        document.getElementsByClassName("answer")[4].style.backgroundColor="green";
        document.getElementsByClassName("answer")[4].style.color="white";
        document.getElementsByClassName("answer")[4].disabled=true;
        document.getElementsByClassName("option")[14].style.backgroundColor="red";
        document.getElementsByClassName("option")[14].style.color="white";
        document.getElementsByClassName("option")[13].disabled=true;
        document.getElementsByClassName("option")[12].disabled=true;
        document.getElementsByClassName("points")[5].innerHTML=n+"/5";
    }
}