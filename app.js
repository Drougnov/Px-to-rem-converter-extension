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

const valueList = document.querySelector('.value-list');
const save = document.getElementById('save');

if (localStorage.getItem('valueList')) {
    valueList.innerHTML = localStorage.getItem('valueList');
}

save.addEventListener('click',()=>{
    if(pxInput.value != 0 || pxInput.value != ''){
        valueList.innerHTML += `<li><span>${pxInput.value} px = ${remInput.value} rem</span> <button type="button" class="delete">❌</button></li>`
    
        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((button)=>{
            button.addEventListener('click',(e)=>{
                e.target.parentNode.remove();
            })
        })
        localStorage.setItem('valueList', valueList.innerHTML);
    }
})