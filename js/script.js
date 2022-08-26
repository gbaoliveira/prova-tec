document.getElementById('convert').onclick = IMC;
document.getElementById('clear').onclick = clearForm;

function IMC(){
    var m = document.getElementById("m").value;
    var q = document.getElementById("q").value;
    var result = result;

    if(isNaN(m) || isNaN(q)){
        alert("Digite um valor válido!");
        return
    }else{
        result = (q / ((m * m)))
    }

    document.getElementById("m").value = parseFloat(m).toFixed(2);
    document.getElementById("q").value = parseFloat(q).toFixed(2);
    document.getElementById("result").value = parseFloat(result).toFixed(2);
    console.log(result)
}

function clearForm(){
    document.getElementById("m").value = "";
    document.getElementById("q").value = "";
    document.getElementById("result").value = "";
}

