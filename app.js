const btn = document.querySelector(".content__icon");
const advice = document.querySelector(".advice");

btn.addEventListener("click", () => {
    getAdvice();
});

window.addEventListener("DOMContentLoaded", () => {
    getAdvice();
});

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((adviceData) => {
            const adviceNumber = adviceData.slip;

            advice.innerHTML = `<p class="content__number">Advice #${adviceNumber.id}</p>
                    <h1 class="content__advice">${adviceNumber.advice}</h1>`;
        })
        .catch((error) => {
            console.log(error);
        });
}
