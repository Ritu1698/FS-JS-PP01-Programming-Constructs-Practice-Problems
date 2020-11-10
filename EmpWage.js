// Check if employee is Present or Absent
const IS_ABSENT = 0;
function checkEmpPrestOrAbsent(empCheck, day) {
    if (empCheck == IS_ABSENT) {
        console.log("On " + day + " Employee is ABSENT");
    }
    else {
        console.log("On " + day + " Employee is PRESENT");
    }
}

// Calculate Daily Wage

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getEmpWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
// Calculate wages for a month
let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    checkEmpPrestOrAbsent(empCheck, day);
    empHrs += getEmpWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + empHrs + " Total Wage: " + empWage);
