//Iam witting the JavaScript code and I will push it on Git
//Printing Prime number till n;
let n=10;
for(let i=2;i<n;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(i);
    }
}
