const acc = document.getElementsByClassName("accordion");
const panels = document.getElementsByClassName("panel"); // Set variable for an array of all panels

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling; // Target the panel where "this" represents the accordion button
    let icon = this.querySelector("i"); // Find the icon element within the specific accordion, "querySelector() returns the first element that matches the selector. In this case, "i"-element.

    // Toggle display of the clicked panel
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.borderBottom = "1px solid var(--N5)"; // Set bottom border when closing
      icon.classList.remove("fa-minus"); // Remove the class for the minus icon
      icon.classList.add("fa-plus"); // Add the class for the plus icon
      console.log("Accordion Closed")
    } else {

      // Open the clicked panel and remove bottom border
      panel.style.display = "block";
      panel.style.borderBottom = "1px solid var(--N5)";
      this.style.borderBottom = "none"; // Remove bottom border for the clicked accordion where "this" represents the accordion button
      icon.classList.remove("fa-plus"); // Remove the class for the plus icon
      icon.classList.add("fa-minus"); // Add the class for the minus icon
      console.log("Accordion Opened")
    }
  });
}