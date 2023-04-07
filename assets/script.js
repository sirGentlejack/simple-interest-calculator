

function calculate(){
    principal = document.getElementById('principal').value;
    rate = document.getElementById('rate').value;
    time = document.getElementById('time').value;

    answer = document.getElementById('answer');
    answer.innerHTML = "the interest is" + (principal * time * rate / 100);
}