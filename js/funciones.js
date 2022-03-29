if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }

 function verlist1() {
    document.getElementById('contmenu').style.display = 'block'; 	  
    document.getElementById('contmenu').style.animation = 'deslisa1 1s';
    setTimeout('dejarlist1()',900);
    
  }

  function dejarlist1() {
     	  
    document.getElementById('contmenu').style.marginLeft = '0%';
    
  }

 function verlist2() {
    document.getElementById('contmenu').style.display = 'block';  	  
    document.getElementById('contmenu').style.animation = 'deslisa2 1s';
    setTimeout('dejarlist2()',900);
    
  }

  function dejarlist2() {
     	  
    document.getElementById('contmenu').style.marginLeft = '-100%';
    
  }



  function verlist3() {
    document.getElementById('contmenu').style.display = 'block';  	  
    document.getElementById('contmenu').style.animation = 'deslisa3 1s';
    setTimeout('dejarlist3()',900);
    
  }

  function dejarlist3() {
     	  
    document.getElementById('contmenu').style.marginLeft = '-200%';
    
  }


  function verlist4() {
    document.getElementById('contmenu').style.display = 'block';  	  
    document.getElementById('contmenu').style.animation = 'deslisa4 1s';
    setTimeout('dejarlist4()',900);
    
  }

  function dejarlist4() {
     	  
    document.getElementById('contmenu').style.marginLeft = '-300%';
    
  }


  function verlist5() {
    document.getElementById('contmenu').style.display = 'block';  	  
    document.getElementById('contmenu').style.animation = 'deslisa5 1s';
    setTimeout('dejarlist5()',900);
    
  }

  function dejarlist5() {
     	  
    document.getElementById('contmenu').style.marginLeft = '-400%';
    
  }


  function nomenu() {
    document.getElementById('contmenu').style.display = 'none';
    
  }

  /*--------------------------------------------------------------------------------------slider noticias--*/

  
  function notilist1() {
    document.getElementById('slidernoti').style.display = 'block'; 	  
    document.getElementById('slidernoti').style.animation = 'deslisa1 1s';
    setTimeout('dejarntlist1()',900);
    
  }

  function dejarntlist1() {
     	  
    document.getElementById('slidernoti').style.marginLeft = '0%';
    
  }

  function notilist2() {
    document.getElementById('slidernoti').style.display = 'block'; 	  
    document.getElementById('slidernoti').style.animation = 'deslisa2 1s';
    setTimeout('dejarntlist2()',900);
    
  }

  function dejarntlist2() {
     	  
    document.getElementById('slidernoti').style.marginLeft = '-100%';
    
  }