document.getElementById('click').addEventListener('click', MadResults);

function MadResults() {
    let verb = document.getElementById('second-word').value;
    let noun = document.getElementById('first-word').value;
    let adjective = document.getElementById('third-word').value;
    let number = document.getElementById('fourth-word').value;

    let message = " When I " + verb + " at my " + noun + " and saw a " + noun + " ! " + " . I said: Will you be my " + number + " boyfriend/girlfriend. "

    document.getElementById('change').innerHTML = message;
    document.getElementById('picture').src = "images/mad-libs-image.jpg";
}

