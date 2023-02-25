function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }
  
  function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }

  const countSheeps = arrayOfSheep => arrayOfSheep.filter(x => x == true).length


  function countSheeps(arrayOfSheep) {
    let arr = arrayOfSheep.filter( sheep => sheep === true);
    return `${arr.length} `;
    //return  arr.length;
    }