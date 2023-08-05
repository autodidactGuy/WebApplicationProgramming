describe("String.filter", function () {
    it("takes an array of strings of words, filters them from string object & return",
        function () {
            let str="This house is not nice. I will not buy this crap house.";
            assert.equal("This house is nice. I will buy this house.", str.filter(['not','crap']));
        });
});

describe("Array.bubbleSort", function () {
    it("sort array object using bubbleSort algorithm",
        function () {
            let arr=[6,4,0,3,-2,1];
            assert.equal([-2,0,1,3,4,6].toString(),arr.bubbleSort().toString());
        });
});

describe("Teacher.teach", function () {
    it("takes subject name and prints string [teacher's name] is now teaching [subject]",
        function () {
            var teacher = new Teacher();
            teacher.initialize("Hassan", 25);
            assert.equal("Hassan is now teaching WAP",teacher.teach("WAP"));
        });
});
