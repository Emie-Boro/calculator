const data_number = document.querySelectorAll('.data-number')
const input = document.getElementById('input')

data_number.forEach((num) =>{
    num.addEventListener('click', ()=>{
        input.value+=num.textContent
    })
})

const data_operator = document.querySelectorAll('.data-operator')

data_operator.forEach((opera)=>{
    opera.addEventListener('click', myfunction)
    
    function myfunction() {
        let  inputValue = input.value
        let lastCharacter = inputValue.at(-1)
        if(lastCharacter === opera.textContent){
            lastCharacter = false
        } else{
            input.value+=opera.textContent
        }
    }
})

document.getElementById('clear').addEventListener('click', ()=>{
    input.value=''
    document.getElementById('result').textContent = ''
})

function myCalculator() {
    //console.log(eval(document.getElementById('input').value))
    document.getElementById('result').textContent = eval(document.getElementById('input').value)
}

