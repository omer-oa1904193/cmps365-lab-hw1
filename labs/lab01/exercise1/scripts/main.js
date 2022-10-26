function reverseArray(array){
    return array.reduce(
        (previous, current, currentIndex) => {
            previous.push(array[array.length - currentIndex - 1])
            return previous
        },
        []
      );
}

function tallyArrayElements(array){
    return array.reduce(
        (accumlator, current, currentIndex) => {
            const index=array.findIndex((e)=>e==current);
            if(index!==-1)
                accumlator[index][1]++;
            return accumlator;
        },
        [...new Set(array)].map(e=>[e, 0])
      );
}

console.log(reverseArray([1,2,3]))
console.log(tallyArrayElements([1,2,1,1,3,5]))
