function bri(str){
    //converting the str into an array
    var arr = str.split("");
    
    var left = 0;
    var right = arr.length-1;
    var finalArr = [];
    var newStr;
  
   for(i = 0; i < arr.length; i++){
        left = 0;
        while(left<right) {
       
       numb = arr[right];
       arr[right] = arr[left]; 
       arr[left]= numb;
       left = left+1;
          
       //converting the elements of an array into string   
       newStr = arr.join("");
       
       // pushing the elements into a new array
       finalArr.push(newStr);
          
    }
   }
    //sort the array in descending order
    finalArr.sort(function(a,b){return b -a;});
    
    //elements are seprated by ','
    console.log (finalArr.join(","));
    
  }
  
  
  bri("7861")
  
  
  
  
  
  
  
   
  