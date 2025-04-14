// Simple example of handling the Search button click
document.getElementById("search-btn").addEventListener("click", () => {
    const muscleGroups = document.getElementById("muscle-groups").value;
    const minutes = document.getElementById("minutes").value;
    const difficulty = document.getElementById("difficulty").value;
  
    if (!muscleGroups || !minutes || !difficulty) {
      alert("Please select all options before searching!");
      return;
    }
  
    // For demonstration, just output what the user selected
    alert(
      `Generating a ${minutes}-minute routine for ${muscleGroups} at ${difficulty} difficulty!`
    );
  
    // You can then redirect to a results page, or dynamically update the page
    // with your generated workout routine.
  });
  