function showModuleSelection() {
    document.getElementById("teacher-selection").classList.add("hidden");
    document.getElementById("module-selection").classList.remove("hidden");
    resetButtons(); // Reset buttons to remove greyed-out effects
    document.querySelector("#step1 button:nth-child(2)").classList.add("greyed"); // Grey out the "Select by Teacher" button
}

function showTeacherSelection() {
    document.getElementById("module-selection").classList.add("hidden");
    document.getElementById("teacher-selection").classList.remove("hidden");
    resetButtons(); // Reset buttons to remove greyed-out effects
    document.querySelector("#step1 button:nth-child(1)").classList.add("greyed"); // Grey out the "Select by Module" button
}

// Reset greyed-out effect on all buttons
function resetButtons() {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => {
        button.classList.remove("greyed");
    });
}

// Handles the module selection and displays relevant curriculum areas or skips directly to time slot selection
function selectModule() {
    const module = document.getElementById("module").value;
    const area1Btn = document.getElementById("area1-btn");
    const area2Btn = document.getElementById("area2-btn");
    const bothBtn = document.getElementById("both-btn");

    // Reset curriculum buttons
    document.getElementById("curriculum-selection").classList.remove("hidden");
    area1Btn.classList.add("hidden");
    area2Btn.classList.add("hidden");
    bothBtn.classList.add("hidden");

    switch (module) {
        case "EIEO02":
            area1Btn.innerText = "Health & PE";
            area2Btn.innerText = "Technology - Food";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        case "ALAC02":
            area1Btn.innerText = "Science";
            area2Btn.innerText = "Visual Arts";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        case "BEST02":
            area1Btn.innerText = "Health & PE";
            area2Btn.innerText = "Science";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        case "GHOS02":
            area1Btn.innerText = "Drama";
            area2Btn.innerText = "Music";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        case "HARH02":
            area1Btn.innerText = "Health & PE";
            area2Btn.innerText = "Te Ao Haka";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        case "OSTA02":
            area1Btn.innerText = "Technology - Soft Materials";
            area2Btn.innerText = "Drama";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        case "SBUG02":
            area1Btn.innerText = "Science";
            area2Btn.innerText = "Social Sciences";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        case "SURV02":
            area1Btn.innerText = "Health & PE";
            area2Btn.innerText = "Social Sciences";
            area1Btn.classList.remove("hidden");
            area2Btn.classList.remove("hidden");
            bothBtn.classList.remove("hidden");
            break;
        default:
            // If only one curriculum area, skip the curriculum area selection
            area1Btn.innerText = "Curriculum Area";
            area1Btn.classList.remove("hidden");
            document.getElementById("curriculum-selection").classList.add("hidden");
            document.getElementById("timeslot-selection").classList.remove("hidden");
            break;
    }

    // Grey out the "Select by Teacher" button but not the clicked "Select by Module"
    document.querySelector("#step1 button:nth-child(2)").classList.add("greyed");
}

// Handles curriculum area selection and greys out other curriculum buttons immediately
function selectCurriculumArea(area) {
    const area1Btn = document.getElementById("area1-btn");
    const area2Btn = document.getElementById("area2-btn");
    const bothBtn = document.getElementById("both-btn");

    // Reset all buttons first
    resetButtons();

    // Grey out the other curriculum buttons but leave the clicked button unchanged
    if (area === "area1") {
        area1Btn.classList.add("greyed");
        
    } else if (area === "area2") {
       area2Btn.classList.add("greyed");
    } else if (area === "both") {
       bothBtn.classList.add("greyed")
    }

    document.getElementById("timeslot-selection").classList.remove("hidden");
}

// Handles the individual teacher selection and greys out the module button immediately
function selectTeacher() {
    document.getElementById("timeslot-selection").classList.remove("hidden");
    // Grey out the "Select by Module" button but not the clicked "Select by Teacher"
    document.querySelector("#step1 button:nth-child(1)").classList.add("greyed");
}

// Confirms the booking and displays the confirmation details
function confirmBooking() {
    const module = document.getElementById("module").value;
    const teacher = document.getElementById("teacher").value;
    const timeslot = document.getElementById("timeslot").value;
    let details = "";

    if (module) {
        details = `Your booking for the ${module} module at ${timeslot} is confirmed.`;
    } else if (teacher) {
        details = `Your booking with ${teacher} at ${timeslot} is confirmed.`;
    }

    if (timeslot) {
        document.getElementById("confirmation-details").innerText = details;
        document.getElementById("timeslot-selection").classList.add("hidden");
        document.getElementById("confirmation").classList.remove("hidden");
    } else {
        alert("Please select a time slot.");
    }
}
