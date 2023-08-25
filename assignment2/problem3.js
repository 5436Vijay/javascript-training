
 const sum = (a, b)=> {
    const sum = a + b;
    return sum
  }

  const multi = (c, d, method)=>{
    let val = method(c,d);
    const mul = val * 2;
    
    return mul
  }
  
x = multi(6,4, sum)

console.log(x);

    