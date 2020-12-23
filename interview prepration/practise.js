function bri(str, target){
    var strInt = parseInt(str);
  
      var uArr = str.split("");
     console.log(uArr);
  
    var arr = uArr.sort();
    console.log (arr);
  
    var l = 0;
    var r = arr.length-1;
    
    while (l <= r){
      var mid = Math.ceil((r + l)/2);
      if (arr[mid] === target){
        console. log("number found " + arr[mid]);
        return;
      } else if(target < arr[mid]) {
        r = mid - 1;
        } else {
          l = mid+1;  
          } 
      if (l>r){
        console.log("number not found");
        return;
      }
    } 
  }
  
  bri("786", "6")
  
  
  
  
  
  
  
   
  