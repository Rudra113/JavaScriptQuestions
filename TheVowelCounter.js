// const vowel = new Set('aeiouAEIOU');
// console.log(vowel)
function VowelCounter(str) {
    const vowel = new Set('aeiouAEIOU');
    let count = 0;
    for (const char of str) {
        if (vowel.has(char)) {
            count++;
        }
    }
    return count
}

console.log(VowelCounter("Rudra RanjAn MOhanty"))
console.log(VowelCounter("AEIaeiouOU"))