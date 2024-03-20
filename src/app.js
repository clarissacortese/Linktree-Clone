// Select all elements with the class name "share-button"
const shareButtons = document.querySelectorAll(".share-button");

// Define an asynchronous function to handle the click event on the share buttons
async function copyText(e) {
  // Prevent the default action of the click event
  e.preventDefault();

  // Get the value of the "link" attribute from the clicked button
  const link = this.getAttribute("link");

  try {
    // Write the link to the clipboard
    // This is an asynchronous operation, hence the use of await
    await navigator.clipboard.writeText(link);

    // If the copy operation is successful, show an alert to the user
    alert("Link copied successfully");
  } catch (err) {
    // If there's an error during the copy operation, log the error to the console
    console.error(err);
  }
}

// Add an event listener for the "click" event to each share button
// Whenever any of the share buttons is clicked, the copyText function will be executed
shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
