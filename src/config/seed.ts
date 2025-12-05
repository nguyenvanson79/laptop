import { prisma } from "./data_comfig"

const initDatabase = async() => {

    const  countUser = await prisma.user.count();
    if(countUser ===0 ) {
          await prisma.user.createMany({
        data :[
        {
            username : " son@gamil.com" ,
            password : "123456",
            accountType : "SYSTEM"

        },
         {
            username : " ADMIN@gamil.com" ,
            password : "123456",
            accountType : "SYSTEM"

        }
        ]
    })

    } else{console.log("data ok ")}

  
}

export default initDatabase ;