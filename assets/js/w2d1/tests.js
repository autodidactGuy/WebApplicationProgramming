describe("max", function () {
    it("takes two integers and return maximum between two",
        function () {
            assert.equal(20, max(20,10));
        });
});

describe("maxOfThree", function () {
    it("takes three integers and return maximum among them",
        function () {
            assert.equal(44, maxOfThree(5, 4, 44));
            assert.equal(55, maxOfThree(55, 4, 44));
        });
});

describe("isVowel", function () {
    it("takes a character and return true its vowel else false",
        function () {
            assert.equal(true, isVowel('a'));
            assert.equal(false, isVowel('d'));
            assert.equal(true, isVowel('apple'));
            assert.equal(false, isVowel('hello'));
        });
});

describe("sum", function () {
    it("takes an array of integers and return sum of all",
        function () {
            assert.equal(10, sum([1,2,3,4]));
        });
});

describe("multiply", function () {
    it("takes an array of integers and return multiplication of all",
        function () {
            assert.equal(24, multiply([1,2,3,4]));
        });
});

describe("reverse", function () {
    it("takes a string and return reverse string",
        function () {
            assert.equal("ratset gaj", reverse("jag testar"));
        });
});

describe("findLongestWord", function () {
    it("takes an array of string and return longest string among all",
        function () {
            assert.equal('helloworld', findLongestWord(['hello','world','helloworld']));
        });
});

