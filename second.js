function validateform(){  

       var regex = /^[A-Za-z ]+$/;
       var isValid = regex.test(document.myform.name.value);
       if (!isValid) {
           alert("Name contains Special Characters. PLease check");
       } 
       else{
           var name = document.myform.name.value;
           localStorage.setItem("name", name);
       }

       var mail=document.myform.email.value;  
       var atposition=mail.indexOf("@");  
       var dotposition=mail.lastIndexOf(".");  
       if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
       alert("Please enter a valid e-mail address");  
       }
       else{
           localStorage.setItem("mail",mail);
       }

       
}  
 
function checkNumber(){
    var regex = /^[0-9 ]+$/;
    var phone = document.myform.phone.value;
    var isValid = regex.test(document.myform.phone.value);
    if (!isValid ) {
        alert("Number is incorrect");
    }  
    else{
        localStorage.setItem("phone",phone);
    }
}


function generateTable()
{
    for (var i = 0; i < 2; i++) {
        var value1 = localStorage.getItem("name");
        var value2 = localStorage.getItem("mail");
        var values = [{"name" : value1}, {"mail": value2}];
        var dataSet = JSON.parse(values);
 
         var row = document.createElement("tr");
         var cell1 = document.createElement("td");
         var cell2 = document.createElement("td");
 
         var cellText1 = document.createTextNode(dataSet[i].cell1);
         cell1.style.height = "50px";
         cell1.style.width = "100px";
         cell1.style.fontWeight = "900";
         cell1.style.textAlign= "center";
         cell1.appendChild(cellText1);
 
         var cellText2 = document.createTextNode(dataSet[i].cell2);
         cell2.appendChild(cellText2);
         cell2.style.textAlign= "center";
         cell2.style.width = "400px"
 
         row.appendChild(cell1);
         row.appendChild(cell2);
 
         tblBody.appendChild(row);
     }
 
     tbl.appendChild(tblBody);
     body.appendChild(tbl);
     tbl.setAttribute("border", "1");
}