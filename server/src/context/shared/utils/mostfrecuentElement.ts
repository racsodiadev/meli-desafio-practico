export const mostFrecuentElement = (arr: Array<any>) => {
    const countMap = new Map();
    let mostFrecuent = arr[0];
    let maxCount = 0;

    arr.forEach((element)=>{
        const count = (countMap.get(element) || 0 ) + 1;
        countMap.set(element, count);

        if(count > maxCount){
            mostFrecuent = element;
            maxCount = count;
        }
    })

    return mostFrecuent;
} 