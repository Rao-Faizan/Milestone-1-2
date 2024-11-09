var toggleSkill = document.getElementById("toggle");
var skills = document.getElementById('skills');
toggleSkill.addEventListener("click", function () {
    if (skills.style.display == 'none') {
        skills.style.display = 'block';
        toggleSkill.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
        toggleSkill.textContent = 'Show Skills';
    }
});
