// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody")
console.log(tableData);

// Initial load of table with all data
/**tableData.forEach(element => {
    let row = tbody.append("tr");
    row.append("td").text(element.datetime);
    row.append("td").text(element.city);
    row.append("td").text(element.state);
    row.append("td").text(element.country);
    row.append("td").text(element.shape);
    row.append("td").text(element.durationMinutes);
    row.append("td").text(element.comments);
});**/

// function for future use to update table
function updateTable() {
    tableData.forEach(element => {
        let row = tbody.append("tr");
        row.append("td").text(element.datetime);
        row.append("td").text(element.city);
        row.append("td").text(element.state);
        row.append("td").text(element.country);
        row.append("td").text(element.shape);
        row.append("td").text(element.durationMinutes);
        row.append("td").text(element.comments);
    });
};
//call updateTable function on initial load
updateTable();

let form = d3.select("form");
let button = d3.select("#filter-btn");

button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() {
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    let filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    tbody.text(updateTable);
    
    //updateTable(filteredData);
    filteredData.forEach(element => {
        let row = tbody.append("tr");
        row.append("td").text(element.datetime);
        row.append("td").text(element.city);
        row.append("td").text(element.state);
        row.append("td").text(element.country);
        row.append("td").text(element.shape);
        row.append("td").text(element.durationMinutes);
        row.append("td").text(element.comments);
    });
};
