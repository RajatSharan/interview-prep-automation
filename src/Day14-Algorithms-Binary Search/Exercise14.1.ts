//Implement a binary search function that takes a sorted array and a target value. Return the index of the target if found, otherwise return -1.

function binarySearch(arr:any,target:any){

    let left=0
    let right=arr.length -1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return -1;

}

console.log(binarySearch([2,3,5,6,7],3))



