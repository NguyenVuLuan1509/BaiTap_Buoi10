// Link bài tập: https://docs.google.com/document/d/1dOKBt0epsxVNdcXwuHWlZrerUVuudlpXFFUrp2FxsXY/mobilebasic 
// Link nộp bài tập: https://docs.google.com/spreadsheets/d/12GjDTtAaGKTfuXxNoHy8uiWJUfbHRSpJpH42cIGE5iY/edit#gid=0

// Câu 21: Tính tổng các số trong mảng?

function sumArray(mang){
    let tong= 0;
    for(let i=0; i<mang.length; i++){
        tong += mang[i];
    }
    return tong;
}

//Câu 22: Tìm số lớn nhất, nhỏ nhất, trung bình của mảng?

function findMaxMinAverage(arr_in){
    let max= arr_in[0];
    let min= arr_in[0];
    let avg= 0;

    for(let i=0; i<arr_in.length; i++){
        if(arr_in[i] > max) max= arr_in[i];
    }

    for(let i=0; i<arr_in.length; i++){
        if(arr_in[i] < min) min= arr_in[i];
    }

    let sum=0;
    for(let i=0; i<arr_in.length; i++){
        sum += arr_in[i];
    }
    avg= sum / arr_in.length-1;

    console.log('Giá trị lớn nhất trong mảng là:',max);
    console.log('Giá trị nhỏ nhất trong mảng là:',min);
    console.log('Giá trị trung bình của mảng là:',avg);
}

// Câu 23: Tìm số xuất hiện nhiều nhất trong mảng và xuất hiện bao nhiêu lần?

function countNumberInArr(arr_cantim){
    let a= [];
    let b= [];
    let tam;

    arr_cantim.sort((a,b)=> a-b);
    for(let i=0; i<arr_cantim.length; i++){
        if(arr_cantim[i] !== tam){
            a.push(arr_cantim[i]);
            b.push(1);
        } else{
            b[b.length-1]++;
        }
        tam= arr_cantim[i];
    }

    // console.log(a);

    let maxCount= Math.max(...b);
    let numBer= b.indexOf(maxCount);

    console.log('Số: ' + a[numBer], 'xuất hiên '+ maxCount);
}

//Câu 24: Lọc ra số nguyên tố trong mảng?

function selectSoNguyenTo(arr_snt){
    // let mangSoNguyenTo= [];
    // for(let i=0 ;i<arr_snt; i++){
    //     arr_snt.filter(
    //         (item)=>{
    //         return  function checkNguyenTo(arr_snt[i]){
    //                 let flag= true;
    //                 if (arr_snt[i]<2) {
    //                     flag= false;
    //                 }else{
    //                     if (arr_snt[i] == 2) {
    //                         flag= true;
    //                     }else{
    //                         for (let index = 3; index < arr_snt[i]-1; index+=2){
    //                             console.log('index thứ', index);
    //                             if (arr_snt[i] % index === 0) {
    //                                 flag= false;
    //                                 break;
    //                             }
    //                         }
    //                     }
    //                 }
    //                 return flag;
    //             }
    //         }
    //     )
    // }
}


//Câu 30: Tìm số lớn thứ 2 trong mảng, ngược lại in -1?

function findSecondNumber(arr_Day){
    let loc= [];
    let b= [];
    let tam;

    arr_Day.sort((a,b)=>a-b);                           //sắp xếp từ nhỏ - lớn
    for(let i=0; i<arr_Day.length; i++){                //Lọc ra các số trùng nhau
        if(arr_Day[i] !== tam) loc.push(arr_Day[i]);
        tam= arr_Day[i];
    }

    // console.log(loc);
    loc.pop();                                          //Xóa phần tử cuối cùng
    if(loc.length == ""){
        console.log(-1);
    }else{                                              //In ra số cuối cùng của mảng
        console.log('Số lớn thứ 2 trong chuỗi là',loc[loc.length-1]);
    }
}
console.log('Tính tổng của mảng: ');
let a= [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
let a1= [1,2,3,4,5,6,7,8,9,9,9,10];
let a2=[];
console.log('Tổng của mảng là:' ,sumArray(a1));
findMaxMinAverage(a1);
countNumberInArr(a);
selectSoNguyenTo(a1);
findSecondNumber(a);