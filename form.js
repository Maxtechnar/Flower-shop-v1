"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);



        if (error === 0) {
            let response = await fetch('mail.php', {
                method: "POST",
                body: formData
            });


            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = "";
                form.reset();
            }
        } else {

        }


    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll(".req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            removeError(input);

            if (input.classList.contains("num")) {
                if (numberTest(input)) {
                    addError(input);
                    error++;
                }
            } else {
                if (input.value === " ") {
                    addError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function addError(input) {
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }

    function removeError(input) {
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
    }

    function numberTest(input) {
        return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
    }
});
