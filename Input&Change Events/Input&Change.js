const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log('kdjdghdjglkjdflkdjg');
// })

// input.addEventListener('input', function (e) {
//     h1.innerText = input.value;
// })


input.addEventListener('input', function (e) {
    if (input.value) {
        h1.innerText = `Welcome, ${input.value}`;
    } else {
        h1.innerText = 'Enter Your Username';
    }
})