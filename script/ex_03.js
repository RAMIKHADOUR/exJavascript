window.onload = function () {
    let name = document.querySelector("footer div");
    name.onclick = function text() {
        let message;

        let nameValue = prompt("Waht's tour name ?");

        if (nameValue === null || nameValue === '') {
            text();
        } else {
            message = confirm(`are you sure  ${nameValue} is your name ? `);
            if (message == true) {
                name.innerHTML = (`Hello ${nameValue} !`);
                message = alert(`Hello ${nameValue} !`)
            } else {
                text();
            }
        }

    }

}