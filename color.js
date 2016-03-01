function modificar() {
    var t1 = document.getElementById("color");
    var t2 = document.getElementById("fin");
    t1.addEventListener('input', function(e){
      t2.style.background=this.value;
    });
  }
