
document.forms[0].addEventListener('submit',(x) => {
   select();
   dia();
});

document.forms[0].elements.color.forEach(col => {
    col.addEventListener('change' , color);
});

function color() {
    let radios = document.querySelector('input[type="radio"][name="color"]:checked');
    document.body.style.backgroundColor = radios.id;
}

function select() {
    var sel = document.querySelector('select').value;
    switch (parseInt(sel)) {
        case 1:
            alert("Se enviará a Jesús");
            break;
        case 2:
            alert("Se enviará a Miguel Ángel");
            break;
        case 3:
            alert("Se enviará a Ricardo");
            break;
        case 4:
            alert("Se enviará a Rafael");
            break;
        case 5:
            alert("Se enviará a Andrés");
            break;
        case 0:
            alert("Por favor, seleccione una asignatura");
            break;

    }
}

function dia() {
    let dias = document.querySelectorAll('.dias:checked'),
        last = dias[dias.length-1].name;
    alert("Se le asignará este día = " + last);
}
