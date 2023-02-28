import _ from 'lodash';
import { argv } from 'process';


function helloWorld(): string {
    return 'Hello World';
}
function lodashExample(): [string, number[]] {
    const arr: number[] = _.concat([1], [2], [3,4]);
    return ['concatenated array', arr];
}
function sumTwoNumbers(): number{
    return parseInt(argv[2]) + parseInt(argv[3]) ;
}

console.log(helloWorld());
console.log(lodashExample());
console.log(sumTwoNumbers());