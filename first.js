function generate_table() {
    var body = document.getElementsByTagName("body")[0];
    
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
 
    for (var i = 0; i < 5; i++) {
        data = '[{"cell1" : "Name", "cell2" : "Renny"},{"cell1" : "Age", "cell2" : "21"},{"cell1" : "DOB", "cell2" : "26/02/1999"},{"cell1" : "Company", "cell2" : "Gemini Solutions"},{"cell1" : "Email", "cell2" : "renny.mittal@geminisolutions.in"}]';
        var dataSet = JSON.parse(data);
         
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


