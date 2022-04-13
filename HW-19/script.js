function avg()
 {
let x1=document.getElementById("student_name");
let x2=document.getElementById("student_grade");

let table=document.getElementById("mytable")


    let label1 = document.createElement("label");
    let label2 = document.createElement("label");

    let table_data1 = document.createElement("td");
    let table_data2 = document.createElement("td");

    let table_row = document.createElement("tr");
    
    let another_table=document.getElementById("another_table")

    let x3=document.getElementById("num");
    let x4=document.getElementById("avag");

    x5=0;
    x6=0;
    x7=0;

    let label3 = document.createElement("label");
    let label4 = document.createElement("label");

    let table_data3 = document.createElement("td");
    let table_data4 = document.createElement("td");

    let row1 = document.createElement("tr");

    
   

    if (x1.value == "" || x2.value == "" ) 
    {  
        alert(" the input is empty");
        label1.style.borderColor="red";
    }

    else 
    {

    label1.textContent=x1.value;
    label2.textContent=x2.value;
    
    table_data1.appendChild(label1);
    table_data2.appendChild(label2);

    table_row.appendChild(table_data1);
    table_row.appendChild(table_data2);
    
    table.appendChild(table_row);

    
    x1.value= "" ;
    x2.value ="";

 x3.value= label3.value;
    x5++;
    x7+=x2;
    x6=x7/x5;
    
    label3.value=x5.value;
    label4.value=x6.value;

    table_data3.appendChild(label3);
    table_data4.appendChild(label4);
    row1.appendChild(table_data3);
    row1.appendChild(table_data4);
    another_table.appendChild(row1);

    }

}