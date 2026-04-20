const compareBtn = document.querySelector("#compare");
const resultSpan = document.querySelector("#result");

compareBtn.onclick = () => {
    const a = Number(document.querySelector("#a").value);
    const b = Number(document.querySelector("#b").value);

    if (a > b) {
        resultSpan.innerText = a;
    } else {
        resultSpan.innerText = b;
    }
};