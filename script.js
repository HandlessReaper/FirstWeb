document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('kontaktFormular').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Vielen Dank für deine Nachricht!');
    });
});
