function FizzBuzz() {
    for(i=1; i<=100; i++) {
 //       const ouput = document.getElementById("#output");
        if(i%3 === 0 && i%5 === 0) {
            console.log(`FizzBuzz ${i}`);
        }else if(i%3 === 0) {
            console.log(`Fizz ${i}`);
        }else if(i%5 === 0) {
            console.log(`Buzz ${i}`);
        }
    }
}
FizzBuzz();
