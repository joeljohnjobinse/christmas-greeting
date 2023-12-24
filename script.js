function submitName() {
    var name = document.getElementById('nameInput').value;

    if (name.trim() === '') {
        alert('Please enter your name.');
    } else {
        window.location.href = 'greeting.html?name=' + encodeURIComponent(name);
    }
}