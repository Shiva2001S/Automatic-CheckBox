let checkboxes = document.querySelectorAll('.checkbox');
console.log(checkboxes)
let lastChecked;

function handleCheck(e) {

    let inBteween = false;
    if (e.shiftKey && this.checked) {

        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBteween = !inBteween;
            }

            if (inBteween) { checkbox.checked = true; }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
});