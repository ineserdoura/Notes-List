// create note

const createNoteButton = document.querySelector("#create-note");
const noteModal = document.querySelector("#note-modal");
const validate = document.querySelector("#validate");

// show create note modal
createNoteButton.addEventListener("click", () => {
  noteModal.style.display = "flex";
});

const saveButton = document.querySelector("#save");
const cancelButton = document.querySelector("#cancel");

// when the user clicks cancel close the modal

cancelButton.addEventListener("click", () => {
  noteModal.style.display = "none";
});

// when the user clicks save button create new note
const notes = document.querySelector("#notes");
saveButton.addEventListener("click", () => {
  // get modal inputs

  const newNoteTitle = document.querySelector("#new-note-title");
  const newNoteBody = document.querySelector("#new-note-body");
  // validate modal inputs

  if (newNoteTitle.value == "" || newNoteBody == "") {
    validate.innerHTML = `Please insert title and body to your note!`;
    return;
  }

  // create new note

  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  const date = document.createElement("h6");
  date.setAttribute("id", "date");
  const cardSubtitle = document.createElement("h5");
  cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");

  const trashButton = document.createElement("i");
  trashButton.classList.add("fas", "fa-trash", "btn", "text-right");
  trashButton.addEventListener("click", () => {
    card.remove();
  });

  function prettyDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds<10){
      seconds = `0${seconds}`;
    }
   
    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
  }
  cardTitle.innerHTML = `📝 ${newNoteTitle.value}`;
  date.innerHTML = `${prettyDate()} 🗓`;
  cardSubtitle.innerHTML = `${newNoteBody.value}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(date);
  cardBody.appendChild(cardSubtitle);
  card.appendChild(cardBody);
  card.appendChild(trashButton);
  notes.appendChild(card);
  noteModal.style.display = "none";
  validate.innerHTML = "";
  newNoteTitle.value = "";
  newNoteBody.value = "";
});

// clear notes


const clearNotes = document.querySelector("#clear-notes");
const clearModal = document.querySelector("#clear-modal");
const closeButton = document.querySelector("#close");
const clearButton = document.querySelector("#clear");

// show clear notes modal

clearNotes.addEventListener("click", () => {
  clearModal.style.display = "flex";
});

// When the user clicks on cancel, close the modal
closeButton.addEventListener("click", () => {
  clearModal.style.display = "none";
});

// When the user clicks on clear, clear the list
clearButton.addEventListener("click", () => {
  clearModal.style.display = "none";
  notes.innerHTML = "";
});

// search notes 

const searchInput = document.querySelector("#search-notes");
searchInput.addEventListener("input", () => {
  
  let filter = searchInput.value.toLowerCase();
  let allNotes = document.querySelectorAll(".card");
  let notesText = document.querySelectorAll(".card-subtitle");
  let notesTitle = document.querySelectorAll(".card-title");
  let textValue;
  let titleValue;

  for (let i = 0; i < notesText.length; i++) {
    const text = notesText[i].innerText;
    const title= notesTitle[i].innerText;
    if (text || title) {
      textValue = text;
      titleValue = title;
      if (textValue.toLowerCase().indexOf(filter) > -1 || titleValue.toLowerCase().indexOf(filter) > -1)  {
        allNotes[i].style.display = "";
      } else {
        allNotes[i].style.display = "none";
      }
    }
  }
});


