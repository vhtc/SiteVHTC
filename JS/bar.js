function animation_bars_softwares(){
  setTimeout(() => { move1(); }, 0); 
  setTimeout(() => { move2(); }, 500); 
  setTimeout(() => { move3(); }, 1000); 
  setTimeout(() => { move4(); }, 1500);
  setTimeout(() => { move5(); }, 2000); 
  setTimeout(() => { move6(); }, 2500);
  setTimeout(() => { move7(); }, 3000); 
  setTimeout(() => { move8(); }, 3500);
  setTimeout(() => { move9(); }, 4000); 
  setTimeout(() => { move10(); }, 4500);
 
}
var y=0;
 function animation_bars_softwares2(){
   if (y==0){
  setTimeout(() => { move11(); }, 0); 
  setTimeout(() => { move12(); }, 500);
  setTimeout(() => { move13(); }, 1000); 
  setTimeout(() => { move14(); }, 1500);
  setTimeout(() => { move15(); }, 2000);
  setTimeout(() => { move16(); }, 2500);
  setTimeout(() => { move17(); }, 3000);
  setTimeout(() => { move18(); }, 3500);
  y++;
 }
}
//animação
var x =0; //global x para div tela 

$(window).on("scroll load",function(){
	var aparecer = 50; // porcentagem (neste caso, é a metade, 50%)
	var eleHeight = $('#softwares').outerHeight(); // altura da div
	var eleTopo = $('#softwares').offset().top; // distancia da div ao topo do documento
	var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
	var distance = eleTopo-scrlTopo; // distancia da div ao topo da janela
	var altJanela = window.innerHeight; // altura da janela
	if((x==0) && distance <= altJanela-(eleHeight*(aparecer/100)))  {
    animation_bars_softwares(); 
    x++;
    
	}
});
//fim animação

function move1() {
    var elem = document.getElementById("bar1");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move2() {
    var elem = document.getElementById("bar2");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move3() {
    var elem = document.getElementById("bar3");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move4() {
    var elem = document.getElementById("bar4");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move5() {
    var elem = document.getElementById("bar5");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move6() {
    var elem = document.getElementById("bar6");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move7() {
    var elem = document.getElementById("bar7");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move8() {
    var elem = document.getElementById("bar8");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move9() {
    var elem = document.getElementById("bar9");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move10() {
    var elem = document.getElementById("bar10");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move11() {
    var elem = document.getElementById("bar11");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move12() {
    var elem = document.getElementById("bar12");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move13() {
    var elem = document.getElementById("bar13");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move14() {
    var elem = document.getElementById("bar14");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move15() {
    var elem = document.getElementById("bar15");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move16() {
    var elem = document.getElementById("bar16");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move17() {
    var elem = document.getElementById("bar17");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  function move18() {
    var elem = document.getElementById("bar18");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }