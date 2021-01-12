function rearranging(str){
  
  // removing spaces and non-numeric characters from string
  const numbStr = str.replace(/[^\d.-]/g, '');
  
  if (numbStr === "" || numbStr.length === 1) {
    console.log ("Enter minimum 2 NUMBERS to see the rearranging");
    return;
  }
  
  //converting the str into an array
  let numbArr = numbStr.split("");
  
  let leftArr = 0;
  const rightArr = numbArr.length-1;
  const resultArr = [];
  let changeNum;
  let tempStore;

 for(let i = 0; i < numbArr.length; i++){
      leftArr = 0;
      while(leftArr<rightArr) {
     
        tempStore = numbArr[rightArr];
        numbArr[rightArr] = numbArr[leftArr]; 
        numbArr[leftArr]= tempStore;
        leftArr = leftArr+1;
        
        //converting the elements of an array into string   
        changeNum = numbArr.join("");
        
        // pushing the elements into a new array
        resultArr.push(changeNum);
      }
  }
  //sort the array in descending order
  resultArr.sort(function(a,b){return b -a;});
    
  //converting into string and seprated by ',' 
  console.log (resultArr.join(","));
  
}

rearranging("A 3B2 C6D");








 
