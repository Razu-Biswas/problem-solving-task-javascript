//problem solving left rotate
function rotate(arr,rotatedTimes){
    let length=arr.length;
    for(let i=0;i<rotatedTimes;i++){
        let b=arr[0];

        for(let j=0;j<length;j++){
            arr[j]=arr[j+1];
        }
        arr[length-1]=b;
    }
    console.log(arr)
}
//function call and input
rotate([1,2,3,4,5],4)


// note: Sample Input
// 5 4
// 1 2 3 4 5
// Sample Output
// 5 1 2 3 4