function bri(str){
    arr = str.split("");
    //console.log(arr);
    var left = 0;
    var  right = arr.length-1;
  
   for(i = 0; i < arr.length; i++){
        left = 0;
        while(left<right) {
       
       numb = arr[right];
       arr[right] = arr[left];
       arr[left]= numb;
  
  
      left = left+1;
    
    console.log (arr);
    }
   }
  
    
  }
  
  
  bri("236")
  
  
  
  
  
  
  
   
  