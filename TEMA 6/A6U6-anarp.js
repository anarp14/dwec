document.getElementById("desactivar").addEventListener("click", function() {
    document.getElementById("input1").disabled = true;
    document.getElementById("input2").disabled = true;
    document.getElementById("input3").disabled = true;
    document.getElementById("input4").disabled = true;
    document.getElementById("input5").disabled = true;
  });



  document.getElementById("activar").addEventListener("click", function() {
    document.getElementById("input1").disabled = false;
    document.getElementById("input2").disabled = false;
    document.getElementById("input3").disabled = false;
    document.getElementById("input4").disabled = false;
    document.getElementById("input5").disabled = false;
  });
