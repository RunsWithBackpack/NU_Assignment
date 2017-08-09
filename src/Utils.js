export const indexOfObj = (arr, objKey, value) => {
  for (var i = 0; i < arr.length; i++){
    console.log("UNTls", arr[i][objKey])
    console.log("UNTls2", value)
    if (arr[i][objKey] === value){
      return i;
    }
    // else {
    //   return -1;
    // }
  }
}
