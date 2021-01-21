const greetings = ['great', 'nice', 'beautiful', 'fun', 'stunning', 'wonderful']
const doSmth    = ['work harder', 'get better', 'keep working', 'be patient']
const wishes    = ['Have fun', 'Good luck', 'Good day', 'Keep up the good work']

const randomWord = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)] 
}

let greet = `Hi! Today is a ${randomWord(greetings)} day!`
let something = `You should ${randomWord(doSmth)}`
let wish = `${randomWord(wishes)}!`

console.log(`${greet} \n${something} \n${wish}`)
