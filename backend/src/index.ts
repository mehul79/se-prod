import prisma from "./db";

async function test(){
    const res = await prisma.user.create({
        data:{
            email: "me@g.com"
        }
    })

    console.log("hehe ", res);
}

test()