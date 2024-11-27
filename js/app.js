// * variable declaration
let form = document.querySelector(".input_groups");
let name_input = document.querySelector("#name_input");
let category_input = document.querySelector("#category_input");
let year_input = document.querySelector("#year_input");
let search_input = document.querySelector("#search_input");
let input_field = document.querySelectorAll(".input_field");
let table = document.querySelector(".table");
let data = [];
//* Function Declaration
function submit(e) {
  e.preventDefault();
  //* variable declaration
  name_value = name_input.value;
  category_value = category_input.value;
  year_value = year_input.value;

  //* reset input fields
  input_field.forEach((item) => (item.value = ""));

  //* removes all the rows
  removeAllRow();
  //* insert value into var data
  data.push({
    name: name_value,
    cat: category_value,
    year: year_value,
  });

  //*add a row using data.map() which returns an array after triggering a function on every item of array data
  data.map((item, index) => addRow(item, index));
}
function addRow(item, index) {
  //* variable declaration
  let c0, c1, c2, c3, c4, c5;
  //* insert a row at index+1 (last) of the table
  let row = table.insertRow(index + 1);
  //* insert a new cell
  c0 = row.insertCell(0);
  c1 = row.insertCell(1);
  c2 = row.insertCell(2);
  c3 = row.insertCell(3);
  c4 = row.insertCell(4);
  c5 = row.insertCell(5);

  //* insert values in the cell
  c0.innerText = index + 1;
  c1.innerText = item.name;
  c2.innerText = item.cat;
  c3.innerText = item.year;
  c4.innerText = "✍";
  c5.innerText = "☒";
}
function removeAllRow() {
  while (table.rows.length > 1) table.deleteRow(-1);
}

//* main code
form.onsubmit = (event) => submit(event);
