function objectCreate(input) {
    let obj = {};
    for (let i = 0; i < input.length - 1; i += 2) {

        obj[input[i]] = Number(input[i + 1])
    }
    console.log(obj);
}