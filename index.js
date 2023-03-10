const jobBtn = document.getElementById("search-btn");
const jobListings = document.getElementById("searchinput");

jobBtn.addEventListener("click", () => {
  // Perform API call to retrieve job listings
  fetch("https://example.com/api/jobs")
    .then(response => response.json())
    .then(data => {
      // Clear previous job listings
      jobListings.innerHTML = "";

      // Create list items for each job
      data.jobs.forEach(job => {
        const li = document.createElement("li");
        li.innerHTML = `<h3>${job.title}</h3>
                        <p>${job.company} - ${job.location}</p>
                        <p>${job.description}</p>`;
                        searchinput.appendChild(li);
      });
    })
    .catch(error => {
      console.error(error);
    });
});
