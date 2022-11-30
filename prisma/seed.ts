import { PrismaClient } from "@prisma/client";
import { hash } from "argon2";
import {Random} from 'mockjs';
import  _  from 'lodash'
//往数据库中添加随机文章作者和数据
const prisma=new PrismaClient()
async function run(){
    await prisma.user.create({
        data:{
            name:'admin',
            password: await hash('admin888')
        }
    })
    for(let i=0;i<5;i++){
        await prisma.category.create({
            data:{
                title:Random.ctitle(10,30),
        
        }
        })
    }
    for(let i=0;i<50;i++){
        await prisma.article.create({
            data:{
                title:Random.ctitle(10,30),
            content:Random.cparagraph(30,50),
            categoryId:1
        }
        })
    }
}
run()