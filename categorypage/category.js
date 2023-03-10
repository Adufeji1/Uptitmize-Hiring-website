const jobListings = document.getElementById('job-listings');

fetch('https://data.usajobs.gov/api/codelist/')
  .then(response => response.json())
  .then(data => {
    data.forEach(job => {
      const li = document.createElement('li');
      li.textContent = `${job.title} - ${job.company}`;
      jobListings.appendChild(li);
    });
  })
  .catch(error => console.log(error));