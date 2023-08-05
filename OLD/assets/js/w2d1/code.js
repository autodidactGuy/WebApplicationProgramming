function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}

function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

function isVowel(c)
{
    const vowels = ['a','e','i','o','u'];
    if(c.length>0){
        if(vowels.includes(c[0])){
            return true;
        }
    }
    return false;
}

function sum(nums)
{
    return nums.reduce(function(total,n){
        return total+n;
    }, 0);
}

function multiply(nums)
{
    return nums.reduce(function(total,n){
        return total*n;
    }, 1);
}

function reverse(str)
{
    return (str+"").split('').reverse().join('');
}

function findLongestWord(words)
{
    return words.reduce(function(max,w){
        return (max.length<w.length)?w:max;
    }, "");
}

function filterLongWords(words,i)
{
    return words.filter(function(w){
        return (w.length>=i)?true:false;
    });
}