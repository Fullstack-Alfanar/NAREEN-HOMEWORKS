//-------------------section1:name_validation----------//


function name_validation(name)
{

if(4<=name.length)
{
    return true;
}
else{
    return false;
}
}



//-------------------section2:age_validation----------//

function age_validation(giving_age)
{
if(10<=giving_age && giving_age<=90)
{
    return true;
}
else
{
    return false;
}
}


//-------------------section3:id_validation----------//


function correct_length(giving_ID)
{
var ID=[0,0,0,0,0,0,0,0,0];

let i,j;     
for(i=giving_ID.length-1, j=8; 0<=i  ;i--,j--)
{
   ID[j]=ID[j]+giving_ID[i];
}
return(ID);// know we have id length 9
}


function id_validation(USER_id)
{

for(var i=0;i<=8;i++)/////נכפיל הערך במקומות זוגיים ב 2
{
if((i+1)%2==0)
{
    USER_id[i]=USER_id[i]*2; 
}

}
 
for(let i=0;i<=8;i++)////אם במערך יש ערך גדול מ 10 אז נהפוך אותו למספר השווה שני המספרים המרכיבים אותו
{
    if(10<=USER_id[i])
    {
        USER_id[i]=(USER_id[i]+1)%10;
    }
}

var sum =0;
for(var i=0;i<=8;i++)
{
sum+=USER_id[i];//// כאן עושים סכום לכל הערכים במערך
}

if(sum%10==0)
{
    return true;
    
}
else
{
    return false;
  
}
}


  


//-------------------section4:email_validation----------//


function email_validat(mail)
 {
    var base = /^([a-zA-Z0-9!#$%&'*+-/=?^_`{|}~/./]+)@([a-zA-Z0-9]+.[a-z]+)?$/
    
    if(base.test(mail))
     {
        console.log("valid email");
        return true;
    }
    else 
    {
        console.log("unvalid email");
        return false ;
    }
}




function validateMyForm()
{
    let name = document.getElementById("name").value;
    console.log(name_validation(name));

    let age = document.getElementById("age").value;
    console.log(age_validation(age));

    let id = document.getElementById("id").value;
    console.log(id_validation(correct_length((id))));

    let mail = document.getElementById("email").value;
    console.log( email_validat(mail));
}

