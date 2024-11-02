  // 1-masala
{
    let n = 4, k = 66
    for(let i = 0; i < n; i++){
        console.log(k);   
    }
}

  // 2-masala
{
    let a = 6, b = 12
    for(let i = a; i <= b; i++){
        console.log(i);  
    }
}  

  // 3-masala
{
    let a = 6, b = 12
    for(let i = b - 1; i > a; i--){
        console.log(i);
    }
}

  // 4-masala
{
    let narx = 5; 
    for (let i = 1; i <= 10; i++){
    console.log(i + " kg konfet narxi:", (narx * i));
    }
}

  // 5-masala
{
    let narx = 10
    for (let i = 0.1; i < 1; i += 0.1){
    console.log(i.toFixed(1) + " kg uchun narx:", (i * narx).toFixed(2));
}

}


 // 6-masala
{
  let narx = 1; 
  for (let kg = 1.2; kg <= 2; kg += 0.2){
  let totalPrice = kg * narx;
  console.log(kg.toFixed(1) + " kg konfet narxi: " + totalPrice.toFixed(2));
  }

}

  // 7-masala
{
    let a = 5, b = 15, sum = 0
    for(let i = a; i <= b; i++){
      sum  += i      
    }
    console.log( "5 dan 15 gacha bo'lgan sonlarning ko'paytmasi: " + sum);
}

  // 8-masala
{
  let sum = 1
  for( let i = 1; i <= 5; i++){
    sum *= i
  }
  console.log("1 dan 5 gacha bo'lgan sonlarning ko'paytmasi: " +sum);
    
}

  // 9-masala
{
  for (let i = 5; i <= 10; i++) {
    let kv = i * i; 
    console.log(i + " ning kvadrati: " + kv);
  }

}

  // 10-masala
{
  let n = 8; s =0
  for(let i = 1; i <= n; i++){
    s += 1 / i
  }
  console.log(s);
  
}