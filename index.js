console.log("Hello world");

function getNumVisits() {
  fetch(
    "https://cb5qgju958.execute-api.us-east-1.amazonaws.com/IncrementAndGetNumberOfResumeVisits",
    {
      method: "get",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("numVisits").textContent = data.numVisits;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  getNumVisits();
});
