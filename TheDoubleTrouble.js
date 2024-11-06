function doublesElementOfArray(arr){
    let res = [];
  
    for (let i = 0; i<arr.length;i++) {
        if (i > 0 && arr[i]==arr[i-1]) {
            res.push(arr[i]);
        }
        else{
            res.push(arr[i] * 2);
        }
    }
    return res;
}

console.log(doublesElementOfArray([1,2,2,3]));
console.log(doublesElementOfArray([4,5,7,8,8,8]));



// function doublesElementOfArray(arr){
//     let doubledElement = new Set();
//     let res = [];
//     arr.forEach(currentElement => {

//         if (doubledElement.has()) {
//             res.push(currentElement)
//         }
//         else{
//             res.push(currentElement*2);
//             doubledElement.add(currentElement)
//         }
//     });
  
//     return res
// }