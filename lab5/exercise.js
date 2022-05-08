
window.onload = function(){
 let img01 = document.getElementById("img1");
 let img02 = document.getElementById("img2");
 let btn = document.getElementsByTagName("button")[0];
 btn.onclick = swap;
 function swap(){
     temp = img02.src;
     img02.src = img01.src;
     img01.src = temp;
  
 }
}