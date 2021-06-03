import Form from "./form.js";

//initialize contact form
let initialForm = new Form();
initialForm.create();
let forms = [initialForm];
if (forms.length == 1) {
  document.querySelector(".btnRemove").hidden = true;
}

// get add contact btn
let btnAdd = document.querySelector(".btnAdd");

// get validate btn
let btnValidate = document.querySelector(".btnValidate");

// get save btn
let btnSave = document.querySelector(".btnSave");

//save contact in text file
const save = (content) => {
  let filename = "contact.txt";
  let contentType = "text/plain";
  const a = document.createElement("a");
  const file = new Blob(content, { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
};

//addContact Action
btnAdd.addEventListener("click", function () {
  let form = new Form();
  forms.push(form);
  form.create();
});

//validate Action
btnValidate.addEventListener("click", function () {
  forms.forEach((form) => {
    form.validate();
  });
});

//save Action
btnSave.addEventListener("click", () => {
  let content = [];
  let error = false;
  forms = forms.filter((form) => !form.removed); //delete removed forms from array
  forms.forEach((form) => {
    if (form.validate()) {
      content.push(form.getDetails());
    } else {
      error = true;
      return;
    }
  });
  if (error) {
    alert("Cannot save forms. Please fix the errors!");
    return;
  }
  save(content);
});
