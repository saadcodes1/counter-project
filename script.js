let decreasebtn = document.getElementById('decreasebtn')        
let resetbtn = document.getElementById('resetbtn')
let increasebtn = document.getElementById('increasebtn')

let result = document.getElementById('result')

let count = 0

increasebtn.addEventListener("click" , () => {
    count = count + 1;
    result.innerHTML = count ;
})  

decreasebtn.addEventListener("click" , () => {
    if (count > 0){
    count = count - 1;
    result.innerHTML = count ;
    }
    else {
        alert('cant decrease below 0! ')
    }
})

resetbtn.addEventListener("click" , () => {
    count = 0
    result.innerHTML = count ;
})