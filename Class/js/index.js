function twice(f,x){ 

  return f(f(x)) 
  
  } 
  function f(x){ 
  
  return x*3
  
  } 
  console.log(twice(f,7)) 
  