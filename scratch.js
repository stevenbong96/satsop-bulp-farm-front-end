// const regex = /[a-z]*odi[a-z]*s/i
// const str = 'Daffodils'

// console.log(regex.test(str))

const url = 'https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605895669/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/Daffodil_gbz77p.jpg'
const id = []
let slashCount = 0
for (let i = url.length - 1; true; i--) {
    if (url[i] === '/') {
        slashCount ++
    }
    if (slashCount === 2) {
        break;
    }

    id.unshift(url[i])

}

console.log(id.join(''))