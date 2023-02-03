const main = document.querySelector('.container');
const pxInput = document.getElementById('px-input');
const remInput = document.getElementById('rem-input');
const convert = document.getElementById('convert');

pxInput.addEventListener('input', (e)=>{
    remInput.value = (e.target.value / 16);
})

remInput.addEventListener('input', (e)=>{
    pxInput.value = (e.target.value * 16);
})

convert.addEventListener('click',()=>{
    main.classList.toggle('convert');
})

const addBtn = document.querySelector("#save");
const valueList = document.querySelector(".value-list");

let savedList = JSON.parse(localStorage.getItem("values")) || [];

function renderValues() {
    valueList.innerHTML = "";
    savedList.forEach((value, index) => {
        const li = document.createElement("li");
        li.innerHTML = value + '<button class="delete-btn">❌</button>';
        valueList.appendChild(li);

        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            savedList.splice(index, 1);
            localStorage.setItem("values", JSON.stringify(savedList));
            renderValues();
        });
    });
}
renderValues();

addBtn.addEventListener("click", () => {
    if (pxInput.value === "" || pxInput.value === 0) return;
    savedList.push(`${pxInput.value} px = ${remInput.value} rem`);
    localStorage.setItem("values", JSON.stringify(savedList));
    pxInput.value = "";
    remInput.value = "";
    renderValues();
});