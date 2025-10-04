let dayOfTheWeek = "friday";

switch (dayOfTheWeek) {
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  case "friday":
    console.log("Weekend is coming");
    break;
  default:
    console.log("Work work...");
};

////////////////////////////////////////////////////////////////////////

let temperature = 15;

if (temperature < 15) {
  console.log("It's cold");
} else if (temperature >= 15 && temperature <= 25) {
  console.log("It's mild");
} else {
  console.log("It's hot");
};

//////////////////////////////////////////////////////////////////////////

let timeOfDay = "evening";

if (timeOfDay === "morning") {
  console.log("Good morning");
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon");
} else if (timeOfDay === "evening") {
  console.log("Good evening");
} else {
  console.log("Unknown time of day");
};

//////////////////////////////////////////////////////////////////////////////

let yearsOfWork = 1;

if (yearsOfWork < 2) {
  console.log("Beginner");
} else if (yearsOfWork >= 2 && yearsOfWork <= 5) {
  console.log("Experienced worker");
} else {
  console.log("Veteran");
};

////////////////////////////////////////////////////////////////////////////////

    let age = 34;

    if (age < 12) {
        console.log("Child");
    } else if (age >= 12 && age <= 18) {
        console.log("Teen");
    } else {
        console.log("Adult");
    };

///////////////////////////////////////////////////////////////////////////////////

let dayOfWeek = "sunday";

switch (dayOfWeek) {
  case "saturday":
  case "sunday":
    console.log("It's a weekend!!!");
    break;
  default:
    console.log("It's a weekday...");
};

/////////////////////////////////////////////////////////////////////////////////////

    let score = 59;

    if (score < 50) {
        console.log("Fail");
    } else if (score >= 50 && score <= 75) {
        console.log("Pass");
    } else {
        console.log("Excellent");
    };
