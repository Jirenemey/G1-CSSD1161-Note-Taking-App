let notes = []

function openNoteDialog() {
    const dialog = document.getElementById('noteDialog');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    dialog.showModal(); // Showing the dialog 
    titleInput.focus(); // Focus on the title input field
}

function closeNoteDialog() {
    document.getElementById('noteDialog').close();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('noteDialog').addEventListener('click', function() {
        if (event.target === this) {
            closeNoteDialog(); // Close the dialog when clicking outside of it 
        }
    })
})

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    const notes = document.querySelectorAll(".note-card");

    notes.forEach(function (note) {
        const noteText = note.textContent.toLowerCase();

        if (noteText.includes(searchText)) {
            note.style.display = "";
        } else {
            note.style.display = "none";
        }
    });
});