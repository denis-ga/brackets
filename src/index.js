module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const chars = Array.from(str);

  let dictionary = Object.assign({}, ...bracketsConfig.map((x) => ({[x[0]]: x[1]})));

  chars.forEach(element => {
    if(dictionary[element] !== undefined && stack[stack.length-1] !== element){
      stack.push(dictionary[element]);
    }
    else{
      if(stack[stack.length-1] === element){
        stack.splice(-1);     
      }
      else{
        stack.push(element);
      }
    }
  });

  if(stack.length === 0)
    return true;
  else
    return false;
}
