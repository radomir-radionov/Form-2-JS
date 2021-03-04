const title = document.getElementById("title");
const description = document.getElementById("description");
const arr = [];
const formEdit = document.getElementById("formEdit");

retrieveFormValue = (event) => {
  event.preventDefault();

  createObj(title, description, arr);

  const now = moment();
  blackboard.innerHTML = `
  <form id="formEdit" class="border-red">
  <div id="content">
  <p>Title: ${title.value}</p>
  <p>Description: ${description.value}</p>
  <p>Data: ${now.format("dddd, MMMM DD YYYY, h:mm:ss")}</p>
  </div>
  <div class="delete-edit">
    <button id="delete" class="btn border-red">Delete</button>
    <button id="edit" class="btn border-red">Edit</button>
  </div>
</form>
  `;
  console.log(arr);
};

createObj = (title, description, arr) => {
  let obj = {};
  obj[1] = title.value;
  obj[2] = description.value;
  arr.push(obj);
};

form.addEventListener("submit", retrieveFormValue);
