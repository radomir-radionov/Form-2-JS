const title = document.getElementById("title");
const description = document.getElementById("description");
const arr = [];

retrieveFormValue = (event) => {
  event.preventDefault();

  createObj(title, description, arr);

  const now = moment();
  content.innerHTML = `
  <p>Title: ${title.value}</p>
  <p>Description: ${description.value}</p>
  <p>Data: ${now.format("dddd, MMMM DD YYYY, h:mm:ss")}</p>
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
