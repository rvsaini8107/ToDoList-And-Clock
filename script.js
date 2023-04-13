

var iditem=0;



function showTime(){
    ++iditem;
    var todoit = document.getElementById("todoit").value;
    var datetimeDiv = document.getElementById("TandD").value;
    


     
     var table = document.getElementById("mytable-todo");

     // Create an empty <tr> element and add it to the 1st position of the table:
     var row = table.insertRow(1);
     row.id=`table-row-${iditem}`
 
     // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     
     // Add some text to the new cells:
     cell1.innerHTML = `<input type="checkbox" name="" id="select-${iditem}" class="form-check ">`;
     cell2.innerHTML = `${todoit}`;
     cell3.innerHTML = datetimeDiv;
     cell4.innerHTML = `<span class="material-symbols-rounded" onclick="EditDiv('table-row-${iditem}')" id="edit-id-${iditem}">edit</span>`;
     cell5.innerHTML = `<span class="close-btn" onclick="closeDiv('table-row-${iditem}')" id="close-id-${iditem}">X</span>`;

    
    // const addTableitem = `
    // <tr id="tr-${iditem}">
    //                 <td><input type="checkbox" name="" id="select-${iditem}" class="form-check "></td>
    //                 <td>${todoit}</td>
    //                 <td>${datetimeDiv}</td>
    //                 <td><span class="close-btn">X</span></td>
    //               </tr>
    // `;
    // datetimeDiv2.innerHTML(addTableitem);
    
    
    console.log(todoit,datetimeDiv,valueEditId);

}


//list Delete
function closeDiv(closedivid){
    var closeAddr = document.getElementById(closedivid);
    closeAddr.remove();
    // console.log("hello",closedivid)
}

// edit  item

function EditDiv(editItem){
    var editItemId = document.getElementById(editItem);
    
    var editItemIdchidren1 = editItemId.children[1];
    var editItemIdchidren2 = editItemId.children[2];
    var valueChild1 = editItemIdchidren1.textContent;
    var valueChild2 = editItemIdchidren2.textContent;
    var todoit = document.getElementById("todoit").value=valueChild1;
    var datetimeDiv = document.getElementById("TandD").value=valueChild2;
    
    closeDiv(editItem);
    // console.log("hhh",editItemId ,editItemIdchidren1.textContent)

    
    
}
