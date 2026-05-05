// exercises.js
function getExerciseRoutine() {
    const goal = document.getElementById('fitness-goal').value;
    const level = document.getElementById('fitness-level').value;

    // Hide all routines
    const routines = document.querySelectorAll('.data');
    routines.forEach(routine => routine.style.display = 'none');

    // Show the selected routine
    if (goal && level) {
        const routineId = `${goal}-${level}`;
        const routine = document.getElementById(routineId);
        if (routine) {
            routine.style.display = 'block';
        }
    }
}