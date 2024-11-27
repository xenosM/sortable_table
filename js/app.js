// * variable declaration
let form = document.querySelector(".input_groups");
let name_input = document.querySelector("#name_input");
let category_input = document.querySelector("#category_input");
let year_input = document.querySelector("#year_input");
let search_input = document.querySelector("#search_input");
let input_field = document.querySelectorAll(".input_field");
let table = document.querySelector(".table");
let addBtn = document.querySelector(".add_item_btn");
let updateBtn = document.querySelector(".update_item_btn");
let data = [
  {
    name: "mejal",
    cat: "general",
    year: 2005,
  },
  {
    name: "ram",
    cat: "css",
    year: 2022,
  },
];
let indexToEdit;
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
  removeAllRows();
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
  //* make edit and delete btn interactive
  c4.classList.add("zoom");
  c5.classList.add("zoom");
  c4.onclick = () => {
    editRow(c4, index);
  };
  c5.onclick = () => {
    deleteRow();
  };
}
function removeAllRows() {
  while (table.rows.length > 1) table.deleteRow(-1);
}
function editRow(column, index) {
  console.log(index);
  if (!column.classList.contains("open")) {
    removeClassOpen();
    column.classList.add("open");

    //* insert value into input element
    name_input.value = data[index].name;
    category_input.value = data[index].cat;
    year_input.value = data[index].year;

    //* switch to update btn
    showUpdateBtn();
    //* declare the index which is to be edited
    indexToEdit = index;
  } else {
    removeClassOpen();

    //* clear the input fields
    resetInput();

    //* switch to add btn
    showAddBtn();
  }
}
function submitEdit() {
  data[indexToEdit] = {
    name: name_input.value,
    cat: category_input.value,
    year: year_input.value,
  };
  resetInput();
  showAddBtn();
  removeAllRows();
  data.map((item, index) => addRow(item, index));
}
function deleteRow() {}
function showUpdateBtn() {
  addBtn.classList.add("hidden");
  updateBtn.classList.remove("hidden");
}
function showAddBtn() {
  addBtn.classList.remove("hidden");
  updateBtn.classList.add("hidden");
}
function removeClassOpen() {
  document.querySelectorAll(".zoom").forEach((item) => {
    item.classList.remove("open");
  });
}
function resetInput() {
  name_input.value = "";
  category_input.value = "";
  year_input.value = "";
}
//* main code
form.onsubmit = (event) => submit(event);
updateBtn.onclick = () => submitEdit();

data.map((item, index) => addRow(item, index));
