function createTable(obj, parent) {
  let table = document.createElement("table");
  table.setAttribute("cellspacing", "0");
  table.setAttribute("cellpadding", "0");
  for (const [key, value] of Object.entries(obj)) {
    let row;
    if (key == "type" || key === "id" || key == "project" || key == "status") {
      continue;
    } else if (key == "date") {
      let date = value.split("-").reverse().join("-");
      row = createRow(key, date);
    } else {
      row = createRow(key, value);
    }
    table.appendChild(row);
  }
  return parent.appendChild(table);
}

function createRow(key, value) {
  let tableRow = document.createElement("tr");
  let tableHeading = document.createElement("th");
  let keyDisplay = key.charAt(0).toUpperCase() + key.substring(1,);
  tableHeading.textContent = keyDisplay;
  let tableData = document.createElement("td");
  tableData.textContent = value;
  if (key == "priority") {
    tableData.setAttribute("style", "font-size:0px")
    let i = 0;
    let n;
    switch(value) {
      case "low":
        n = 1;
        break;
      case "medium":
        n = 2   
        break;
      case "high": 
        n = 3;
        break;
    }
    while ( i < n ) {
      let priorityDisplay = document.createElement("img");
      priorityDisplay.setAttribute("src", "url(../../../src/general/images/svg-star--red.svg");
      tableData.appendChild(priorityDisplay);
      i++
    }
    
  }
  assignClass(key, tableData);
  tableRow.appendChild(tableHeading);
  tableRow.appendChild(tableData);
  return tableRow;
}
function assignClass(key, element) {
  switch (key) {
    case "title":
      element.classList.add("table__td--title", "table__td");
      break;
    case "details":
      element.classList.add("table__td--details", "table__td");
      break;
    case "date":
      element.classList.add("table__td--date", "table__td");
      break;
    case "priority":
      element.classList.add("table__td--priority", "table__td");
      break;
  }
}

export { createTable, };