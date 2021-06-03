class Form {
  constructor() {
    this.id = Math.floor(Math.random() * 1000);
    this.section = null;
    this.container = null;
    this.name = null;
    this.email = null;
    this.mobile = null;
    this.removed = null;
  }

  //function create: create a new contact form
  create() {
    this.removed = false;

    //Create main section
    this.section = document.createElement("form");
    this.section.classList.add("mainsection");
    this.section.classList.add(this.id.toString());

    //Create form body
    let formGroup = document.createElement("div");
    formGroup.className = "form-group";
    let label = document.createElement("label");
    label.innerText = "Contact";
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.className = "btnRemove";
    removeBtn.type = "button";
    removeBtn.addEventListener("click", () => {
      this.section.remove();
      this.removed = true;
    });
    let hr = document.createElement("hr");
    hr.className = "solid";

    //Create name-group
    let namegroup = document.createElement("div");
    namegroup.className = "name-group";
    let namelabel = document.createElement("label");
    namelabel.innerText = "Name";
    this.name = document.createElement("input");
    this.name.type = "text";
    this.name.defaultValue = "";
    this.name.required = true;
    this.name.id = "name";
    this.name.className = "custom-input";

    let errorText = document.createElement("p");
    errorText.className = `error-name-${this.id.toString()}`;
    let nameInputGroup = document.createElement("div");
    nameInputGroup.append(this.name, errorText);

    namegroup.append(namelabel, nameInputGroup);

    //Create email-group
    let emailgroup = document.createElement("div");
    emailgroup.className = "email-group";
    let emaillabel = document.createElement("label");
    emaillabel.innerText = "Email";
    this.email = document.createElement("input");
    this.email.type = "text";
    this.email.defaultValue = "";
    this.email.id = "email";
    this.email.required = true;
    this.email.className = "custom-input";

    let errorText2 = document.createElement("p");
    errorText2.className = `error-email-${this.id.toString()}`;
    let emailInputGroup = document.createElement("div");
    emailInputGroup.append(this.email, errorText2);

    emailgroup.append(emaillabel, emailInputGroup);

    //create mobile-group
    let mobilegroup = document.createElement("div");
    mobilegroup.className = "mobile-group";
    let mobilelabel = document.createElement("label");
    mobilelabel.innerText = "Mobile";
    this.mobile = document.createElement("input");
    this.mobile.type = "text";
    this.mobile.defaultValue = "";
    this.mobile.id = "mobile";
    this.mobile.required = true;
    this.mobile.className = "custom-input";

    let errorText3 = document.createElement("p");
    errorText3.className = `error-mobile-${this.id.toString()}`;
    let mobileInputGroup = document.createElement("div");
    mobileInputGroup.append(this.mobile, errorText3);

    mobilegroup.append(mobilelabel, mobileInputGroup);

    formGroup.append(label, removeBtn, hr, namegroup, emailgroup, mobilegroup);
    this.section.appendChild(formGroup);

    document.querySelector("#container").appendChild(this.section);
  }

  getDetails() {
    let content = `name: ${this.name.value}\nemail: ${this.email.value}\nmobile: ${this.mobile.value}\n\n`;
    return content;
  }

  //function validate: validate all input elements
  validate() {
    let nameRegex = /^[a-zA-Z ]+$/;
    let emailRegex =
      /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    let numbersRegex = /^[0-9]+$/;
    let correct = true;

    //check input name: Alphabets and space
    if (this.name.validity.typeMismatch || !this.name.value.match(nameRegex)) {
      let p = document.querySelector(`.error-name-${this.id.toString()}`);
      p.innerHTML =
        "Name contains invalid characters (letters and space only!)";
      correct = false;
    }
    //check input email: only valid emails
    if (!this.email.value.match(emailRegex)) {
      let p = document.querySelector(`.error-email-${this.id.toString()}`);
      p.innerHTML = "Invalid Email Address";
      correct = false;
    }
    //check input phone mumber: numbers only
    if (!this.mobile.value.match(numbersRegex)) {
      let p = document.querySelector(`.error-mobile-${this.id.toString()}`);
      p.innerHTML = "Invalid Phone Number";
      correct = false;
    }

    if (correct) {
      document.querySelector(`.error-name-${this.id.toString()}`).innerHTML =
        "";
      document.querySelector(`.error-email-${this.id.toString()}`).innerHTML =
        "";
      document.querySelector(`.error-mobile-${this.id.toString()}`).innerHTML =
        "";
    }

    return correct;
  }
}

export default Form;
