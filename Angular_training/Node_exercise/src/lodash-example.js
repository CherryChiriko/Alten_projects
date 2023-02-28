import _ from 'lodash';

export function lodashExample(){
    const arr= _.concat([1], [2], [3,4]);
    console.log('concatenated array', arr);
}