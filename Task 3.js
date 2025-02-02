let x = 100;

{
    x = 11;
    console.log(x); // 11

    {
        let x = 4300;
        {
            x = 14;
        }
        console.log(x); // 14
        {
            x = 700;
        }
        console.log(x); // 700
    }
    console.log(x); // 11
}
console.log(x); // 11