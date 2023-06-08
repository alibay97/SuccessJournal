// function displayEntries() {
//   fetch('/api/entries')
//     .then((response) => response.json())
//     .then((entries) => {
//       const entriesList = document.getElementById('entries');
//       entriesList.innerHTML = '';

//       entries.forEach((entry) => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//           <h3>${entry.title}</h3>
//           <p>${entry.content}</p>
//           <button onclick="deleteEntry('${entry._id}')">Delete</button>
//           <button onclick="editEntry('${entry._id}')">Edit</button>
//         `;
//         entriesList.appendChild(listItem);
//       });
//     })
//     .catch((error) => {
//       console.error('Error retrieving entries:', error);
//     });
//   }

//   function deleteEntry(entryId) {
//     fetch(`/api/entries/${entryId}`, {
//       method: 'DELETE',
//     })
//       .then((response) => response.json())
//       .then((deletedEntry) => {
//         console.log('Entry deleted:', deletedEntry);
//         displayEntries();
//       })
//       .catch((error) => {
//         console.error('Error deleting entry:', error);
//       });
//   }

// function editEntry(entryId) {
//   // Add your code for editing an entry here
// }

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const titleInput = document.getElementById('title');
//   const contentInput = document.getElementById('content');

//   const newEntry = {
//     title: titleInput.value,
//     content: contentInput.value,
//   };

//   fetch('/api/entries', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newEntry),
//   })
//     .then((response) => response.json())
//     .then((savedEntry) => {
//       // Redirect to index.html after successful submission
//       window.location.href = 'index.html';
//     })
//     .catch((error) => {
//       console.error('Error creating entry:', error);
//     });
// }

// const entryForm = document.getElementById('entryForm');
// if (entryForm) {
//   entryForm.addEventListener('submit', handleFormSubmit);
// } else {
//   // If entryForm is not found, it means we are on the index.html page
//   displayEntries();
// }


