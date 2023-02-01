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

const saveValue = document.getElementById('save')
const valueList = document.querySelector('.value-list');
const deleteButtons = document.querySelectorAll('.delete');

// let valueListString = valueList.innerHTML;
// localStorage.setItem("savedList", valueListString);
// let savedList = localStorage.getItem("savedList");
// valueList.innerHTML = savedList;

saveValue.addEventListener('click', ()=>{
    if(pxInput.value != 0){
        valueList.innerHTML += `<li>
                                    <span>${pxInput.value} px = ${remInput.value} rem</span>
                                    <button type="button" class="delete">❌</button>
                                </li>`;
    }else{
        return
    }
})

deleteButtons.forEach(btn=>{
    btn.addEventListener('click', (event)=>{
        const li = event.target.parentNode;
        li.remove();
    })
})