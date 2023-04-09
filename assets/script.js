

function calculate(){
    principal = document.getElementById('principal').value;
    rate = document.getElementById('rate').value;
    time = document.getElementById('time').value;

    answer = document.getElementById('answer');
    answer.innerHTML = "The interest is" + " " + (principal * time * rate / 100);
}