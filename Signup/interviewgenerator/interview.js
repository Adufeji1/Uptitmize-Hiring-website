// Define the number of interview slots per day and the number of days to generate
const SLOTS_PER_DAY = 4;
const NUM_DAYS = 5;

// Define the start date and time for the first interview slot
const startDateTime = new Date("2023-03-15T09:00:00");

// Create an array to hold the interview dates/times
const interviewSlots = [];

// Loop through each day and create interview slots
for (let day = 0; day < NUM_DAYS; day++) {
  // Loop through each time slot
  for (let slot = 0; slot < SLOTS_PER_DAY; slot++) {
    // Calculate the interview date/time
    const interviewDateTime = new Date(startDateTime.getTime() + (day * 24 * 60 * 60 * 1000) + (slot * 2 * 60 * 60 * 1000));
    
    // Add the interview date/time to the array
    interviewSlots.push(interviewDateTime);
  }
}

// Get the HTML elements
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const generateBtn = document.getElementById("generateBtn");
const interviewSlot = document.getElementById("interviewSlot");

// Add an event listener to the generate button
generateBtn.addEventListener("click", function() {
  // Get the selected date and time
  const selectedDate = new Date(dateInput.value);
  const selectedTime = timeInput.value;

  // Find the closest interview slot
  let closestSlot = null;
  let minDiff = Infinity;
  for (const slot of interviewSlots) {
    const diff = Math.abs(slot - selectedDate);
    if (diff < minDiff) {
      closestSlot = slot;
      minDiff = diff;
    }
  }

  // Format the closest interview slot date/time as a string
  const formattedSlot = `${closestSlot.toDateString()} at ${selectedTime}`;

  // Display the closest interview slot
  interviewSlot.innerHTML = `Your interview is scheduled for ${formattedSlot}.`;
});
