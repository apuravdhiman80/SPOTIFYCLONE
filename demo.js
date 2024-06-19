async function func()
{return new Promise((resolve,reject)=>
{
    setTimeout(() => {
        resolve(87);
    }, 2000);
})
}
async function main()
{let p=await func();
    console.log(p);
}
main();