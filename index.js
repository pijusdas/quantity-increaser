document.getElementById('plus').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num').innerText);
    const result = num1 + 1;
    console.log(result)
    document.getElementById('num').textContent = `${result}`;
});
document.getElementById('minus').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num').innerText);
    const result = num1 - 1;
    console.log(result)
    document.getElementById('num').textContent = `${result}`;
});