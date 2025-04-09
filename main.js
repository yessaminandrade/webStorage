//Puse todo el english para practicarlo jeje
// Welcome
let encabezado1 = document.getElementsByTagName("h1").item(0);
let eliminarBtn = document.getElementById("eliminarBtn");

if (encabezado1 && eliminarBtn) {
  let name = localStorage.getItem("name");

  if (name != null && name !== "") {
    encabezado1.innerText = `Hi! Welcome back ${name}`;
    eliminarBtn.style.display = "inline-block";
  } else {
    encabezado1.innerText = "Please go back to the index and enter your name.";
    eliminarBtn.style.display = "none";
  }

  eliminarBtn.addEventListener("click", function () {
    localStorage.removeItem("name");
    encabezado1.innerText = "Please go back to the index and enter your name.";
    eliminarBtn.style.display = "none";
  });
}

// Index 
let guardarBtn = document.getElementById("guardarBtn");
let nameInput = document.getElementById("txtName");

if (nameInput) {
  nameInput.addEventListener("blur", function () {
    let name = nameInput.value.trim();
    if (name !== "") {
      nameInput.value = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
  });
}

if (guardarBtn && nameInput) {
  guardarBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    if (name !== "") {
      localStorage.setItem("name", name);
      nameInput.value = "";
    }
  });
}
