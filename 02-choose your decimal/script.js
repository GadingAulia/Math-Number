function chooseDecimals(n, d) {
    if (typeof n !== 'number' || typeof d !== 'number') {
      return 'Invalid input';
    }
    if (Number.isInteger(n)) {
      return n.toFixed(d);
    } else {
      return Number(n.toFixed(d));
    }
  }
  
  console.log(chooseDecimals(2.100212, 2)); 
  console.log(chooseDecimals(2.100212, 3)); 
  console.log(chooseDecimals(2100, 2)); 