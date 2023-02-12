function star(){
  for(i=0; i<10; i++){
    for(j=0; j<i; j++){
      document.write('<span>*</span>');
    }
    document.write('<br>')
  } 

}

star();
star();


function minus(){
  for(i=0; i<10; i++){
    for(j=10; j>i; j--){
      document.write('*')
  
    }
    document.write('<br>')
  
  }
}

minus();
minus();

let time = new Date();
console.log(time);
hr = time.getHours();
console.log(hr);
min = time.getMinutes();
console.log(min);
sec = time.getSeconds();
year = time.getFullYear();
console.log(year);


