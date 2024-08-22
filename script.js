

const filterOddNumber = (arr)=> {
  return arr.filter((num)=>num % 2 == 0)
  
};

const multiplyBy2 = (arr)=>{
    return arr.map((num)=> num * 2);
}


const manipulateArr = (arr)=>{
  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
      const filterNum = filterOddNumber(arr);
      document.getElementById("output").innerText = filterNum;
      
      setTimeout(()=>{
        const multiple = multiplyBy2(arr);
        
        document.getElementById("output").innerText = multiple;
        
         setTimeout(() => {
                            resolve(multiple);
            }, 1000); 
      },1000)
    },1000)
  })
}
let arr = [1,2,3,4]

  manipulateArr(arr).then(finalArray => {
    
            document.getElementById('output').innerText =finalArray;
        });