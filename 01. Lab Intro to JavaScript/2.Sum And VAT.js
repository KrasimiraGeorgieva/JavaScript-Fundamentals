function sumAndVat(nums) {
    let sum = 0;
    for (let i = 0; i<nums.length; i++){
        sum += nums[i];
    }
    /*for(let num of nums){
        sum += num;
    }*/

    console.log("sum " + sum);
    console.log("VAT " + sum * 0.20);
    console.log("total " + sum * 1.20);
}
//sumAndVat([1.20, 2.60, 3.50]);