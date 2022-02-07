function yinYang (array) {
    // escreva seu código aqui :)
    string = [];
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i]%2 === 0 && array[i]%3 === 0){
            string += "YinYang";
        }
        else if (array[i]%2 === 0) {
            string += "Yin";
        }
        else if (array[i]%3 === 0) {
            string += "Yang";
        }
        else {
            string += array[i];
        }
    }
    return string;
}

console.log(yinYang([1,2,3,4,5,6]));