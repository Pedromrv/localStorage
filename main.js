// Web Storage

// local Storage
localStorage.setItem("name", "Fernando");
localStorage.setItem("surname", "Zárate");

let nombre = localStorage.getItem("name");
let apellido = localStorage.getItem("surname");

// console.log(`${nombre}, ${apellido} `);

//leer todo lo que hay en el localStorage 
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    // alert(`${key}: ${localStorage.getItem(key)} `);

}

//almacenar un array=====================================
const skills = ["html", "css", "js", "react"];
//antes de tratar un array tiene que estar de forma encadenada (string)==>                    JSON.stringify(value, replacer, space)
let skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
// console.log(localStorage);

let tools = [
    { tech: "HTML", level: 10 },
    { tech: "CSS", level: 9 },
    { tech: "JS", level: 8 },
    { tech: "React", level: 9 },
    { tech: "Redux", level: 10 },
    { tech: "Node", level: 8 },
    { tech: "MongoDB", level: 8 },
];
let utils = JSON.stringify(tools);
localStorage.setItem("tools", utils);

//parse se utiliza para intercambiar datos de un web server. Transformamos la data en un objeto Javascript.
let parseador = JSON.parse(localStorage.getItem("tools"));
// console.log(parseador);

// otra forma de expresarlo
let movies = [
    "Reservoir Dogs",
    "Pulp Fiction",
    "Jackie Brown",
    "Kill Bill",
    "Death Proof",
    "Inglourious Basterds"
];

localStorage.setItem("quentinTarantino", JSON.stringify(movies));
let retrieveData = localStorage.getItem("quentinTarantino");

// añadir elementos a un array que se encuentra en LocalStorage

let bootcamps = ["ux", "data", "front", "ciber"];
localStorage.setItem("bootcamps", JSON.stringify(bootcamps));
let newBootcamp = JSON.parse(localStorage.getItem("bootcamps"));
newBootcamp.push("marketing");
localStorage.setItem("bootcamps", JSON.stringify(newBootcamp));
// console.log(localStorage);

//métodos de objetos=====================================

// Object.entries()
const operatingSystems = {
    name: "windows",
    version: 11,
    license: "private"
};

let entries = Object.entries(operatingSystems);
// console.log(entries);

// Object.keys()
const employees = {
    boss: "Michael",
    secretary: "Pam",
    sales: "Jim",
    accountant: "Oscar"
};
let keys = Object.keys(employees);
// console.log(keys);

//Object.create()
const job = {
    position: "cashier",
    type: "hourly",
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable
            ? "is accepting applications"
            : "is not currently accepting applications";

        // console.log(`the ${this.position} position is ${this.type} and ${accepting}`);

    },
};
let newPosition = Object.create(job);
newPosition.position = "developer";
newPosition.showDetails();

// console.log(newPosition.showDetails());

//Object.assign()
const nam = {
    firstname: "Philip",
    lastName: "Fry"
}

const details = {
    job: "delivery boy",
    employer: "Planet Express"
}
//para "mergear" los objetos
const character = Object.assign(nam, details);
console.log(character);


// session Storage


localStorage.clear();




//====================Ejercicio localStorage================

// ==Cómo guardar datos en localStorage usando JavaScript==

// Aprenderás a utilizar localStorage una propiedad de la interfaz de window que te permite acceder a un objeto de almacenamiento desde el navegador. Para que entiendas cómo funciona localStorage construiremos una sencilla aplicación para tomar notas que guardará y borrará datos en el localStorage.


// primero declararemos variables para los elementos HTML con los que vamos a trabajar
const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("notes");

// También guardaremos las notas existentes en una variable noteStorage para que sea más fácil trabajar con ellas. Si todavía no hay ninguna nota en el localStorage, simplemente se creará un array vacío
let notesStorage = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

// A continuación añadiremos la funcionalidad de guardar una nueva nota cuando se envíe el formulario:
noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    notesStorage.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    listBuilder(noteInput.value);
    noteInput.value = "";
});

// Esto empuja la nueva nota en el notesStorage y luego actualiza las notas en el localStorage. A continuación, llamamos a una función listBuilder que añade la nota al elemento de lista desordenada en nuestro marcado HTML, aquí está el código de esa función:
const listBuilder = (text) => {
    const note = document.createElement("li");
    note.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
    notes.appendChild(note);
};

// Las notas se guardan ahora en localStorage y se muestran en el HTML. Sin embargo, si la página se actualiza, las notas ya no se mostrarán en el HTML, por lo que tenemos que recorrer cada una de las notas en localStorage cuando se cargue la página y volver a mostrarlas en el HTML:
// const getNotes = JSON.parse(localStorage.getItem("notes"));
// getNotes.forEach((note) => {
//   listBuilder(note);
// });

// Lo último que tenemos que hacer es añadir la funcionalidad del botón de borrar:

const deleteNote = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    notesStorage.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    el.remove();
  };

//   Esto obtiene el índice del elemento de la lista a eliminar y lo elimina tanto del HTML como del localStorage.

// ¡Esperemos que te haya servido para entender cómo trabajar con datos en el localStorage!
