let navLinks = document.getElementById("navLinks");
const moreCourses = document.getElementById("more-courses");
let moreCoursesButton = document.getElementById("more-courses-btn");
const moreFacilities = document.getElementById("more-facilities");
let moreFacilitiesButton = document.getElementById("more-facilities-btn");
let isCoursesSeeMoreOn = false;
let isFacilitiesSeeMoreOn = false;

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-150px";
}
moreCoursesButton.addEventListener("click", function () {
  if (isCoursesSeeMoreOn == false) {
    moreCourses.style.height = "fit-content";
    moreCourses.style.padding = "20px 0";
    isCoursesSeeMoreOn = true;
    moreCoursesButton.textContent = "See Less";
  } else {
    moreCourses.style.height = "0";
    moreCourses.style.padding = "0";
    isCoursesSeeMoreOn = false;
    moreCoursesButton.textContent = "See More";
  }
});

moreFacilitiesButton.addEventListener("click", function (e) {
  if (isFacilitiesSeeMoreOn == false) {
    moreFacilities.style.height = "fit-content";
    moreFacilities.style.padding = "20px 0";
    isFacilitiesSeeMoreOn = true;
    moreFacilitiesButton.textContent = "See Less";
  } else {
    moreFacilities.style.height = "0";
    moreFacilities.style.padding = "0";
    isFacilitiesSeeMoreOn = false;
    moreFacilitiesButton.textContent = "See More";
  }
});
