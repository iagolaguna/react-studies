window.onload = () => {
    const increment =  document.getElementById('increment')
    const value =  document.getElementById('value')
    const decrement =  document.getElementById('decrement')
    const changeColor =  (newValue) => {
        if(newValue > 0) {
            value.style.color = "blue";
        } else if (newValue < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
    }

    increment.onclick = ()  => {
        console.log('Increment')
        // const newValue = parseInt(value.textContent) + 1
        value.textContent =  newValue
        const newValue = document.createElement('span')
        newValue.textContent = parseInt(value.textContent) + 1
        value =  newValue;
        console.log(value.textContent)
        changeColor(newValue)
    }

    decrement.onclick = ()  => {
        console.log('Decrement')
        const newValue = parseInt(value.textContent) - 1
        value.textContent =  newValue
        console.log(value.textContent)
        changeColor(newValue)
    }

    console.log(increment, value, decrement)
}