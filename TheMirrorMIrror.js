function createMirroredString(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return str + reversed
}

let original = "Rudra"
let mirrored = createMirroredString(original)
console.log(mirrored);

