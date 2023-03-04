function myfunk() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if (b1.tolwerCase() == 'x' && b2.tolwerCase() == 'x' && b3.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    } else if (b4.tolwerCase() == 'x' && b5.tolwerCase() == 'x' && b6.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    } else if (b7.tolwerCase() == 'x' && b8.tolwerCase() == 'x' && b9.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    } else if (b1.tolwerCase() == 'x' && b4.tolwerCase() == 'x' && b7.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    } else if (b2.tolwerCase() == 'x' && b5.tolwerCase() == 'x' && b8.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    } else if (b3.tolwerCase() == 'x' && b6.tolwerCase() == 'x' && b9.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    } else if (b1.tolwerCase() == 'x' && b5.tolwerCase() == 'x' && b9.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    } else if (b3.tolwerCase() == 'x' && b5.tolwerCase() == 'x' && b7.tolwerCase() == 'x') {
        window.alert('You are winner');
        reset();
    }     

    if (b1.tolwerCase() == 'o' && b2.tolwerCase() == 'o' && b3.tolwerCase() == 'o') {
    window.alert('You are winner');
    reset();
    } else if (b4.tolwerCase() == 'o' && b5.tolwerCase() == 'o' && b6.tolwerCase() == 'o') {
        window.alert('You are winner');
        reset();
    } else if (b7.tolwerCase() == 'o' && b8.tolwerCase() == 'o' && b9.tolwerCase() == 'o') {
        window.alert('You are winner');
        reset();
    } else if (b1.tolwerCase() == 'o' && b4.tolwerCase() == 'o' && b7.tolwerCase() == 'o') {
        window.alert('You are winner');
        reset();
    } else if (b2.tolwerCase() == 'o' && b5.tolwerCase() == 'o' && b8.tolwerCase() == 'o') {
        window.alert('You are winner');
        reset();
    } else if (b3.tolwerCase() == 'o' && b6.tolwerCase() == 'o' && b9.tolwerCase() == 'o') {
        window.alert('You are winner');
        reset();
    } else if (b1.tolwerCase() == 'o' && b5.tolwerCase() == 'o' && b9.tolwerCase() == 'o') {
        window.alert('You are winner');
        reset();
    } else if (b3.tolwerCase() == 'o' && b5.tolwerCase() == 'o' && b7.tolwerCase() == 'o') {
        window.alert('You are winner');
        reset();
    }
}
function reset() {
    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}

let flag = 1;
function setValue() {
    if (flag ==1) {
        this.value = "X";
        this.disabled = true;
        flag = 0;
    } else {
        this.value = "O";
        this.disabled = true;
        flag = 1;
    }
}