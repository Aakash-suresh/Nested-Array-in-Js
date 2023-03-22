let arr_1 = [3,1]
let arr_2 = [0,4]

// IsNested(arr_1,arr_2)

console.log(IsNested(arr_1,arr_2))

function IsNested(arr_1,arr_2)
{
    let min_val_arr_1 = 9999;
    let max_val_arr_1 = 0;
    let min_val_arr_2 = 9999;
    let max_val_arr_2 = 0;
    
        minval = Infinity;
        maxval = -Infinity;
      
        for (item of arr_1) {
            // find minimum value
            if (item < min_val_arr_1)
                min_val_arr_1 = item;
      
            // find maximum value
            if (item > max_val_arr_1)
                max_val_arr_1 = item;
        }

        for (item of arr_2) {
            // find minimum value
            if (item < min_val_arr_2)
                min_val_arr_2 = item;
      
            // find maximum value
            if (item > max_val_arr_2)
                max_val_arr_2 = item;
        }

        console.log(min_val_arr_1)
        console.log(max_val_arr_1)
        console.log(min_val_arr_2)
        console.log(max_val_arr_2)
    

    return (min_val_arr_1>min_val_arr_2)&&(max_val_arr_1<max_val_arr_2);

}

