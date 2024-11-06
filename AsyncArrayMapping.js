async function delayMultiply(numbers) {
    const results = []
    for (const number of numbers) {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number * 2)
            }, 500);
        })
        results.push(result)
    }
    return results
}

const numbers = [2, 5, 9, 8, 7]
delayMultiply(numbers).then(results => {
    console.log(results)
})

