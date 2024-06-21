function countDown(num) {
    if (num <= 0) {
        console.log("All done");
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}

countDown(5);



//print 5
//countDown(5)
//print 4
//countDown(4)
//print 3
//countDown(3)
//print 2
//countDown(2)
//print 1
//countDown(1)
//print 0
//countDown(0)          ==> 0 - 1 = -1, ==> num is less 0, so, it will print "All done"