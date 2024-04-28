const countValue = document.querySelector("#cont");



const increment = () => {
    let value = parseInt(countValue.innerText);
    value++;
    countValue.innerText = value;

}



const dicrement = () => {

    let value = parseInt(countValue.innerText);
    value--;
    countValue.innerText = value;

}