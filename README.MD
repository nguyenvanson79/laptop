<!----------------- CHÚ THÍCH  ------------------->

<!-- tạo git  -->
...............

<!-------- dự án  ------------->

 ## json 
npm init 

## cái express 
npm i --save-exact express@5.0.1

## cấu hình typescript
npm i --save-exact --save-dev typescript@5.7.3 @types/express@5.0.0 @types/node@22.10.7

 npx tsc --init
 npx tsc

 ## để tsc chạy trong src thì phải thêm 
 "rootDir": "src",

 ## chạy luôn không cần chạy lại watch 
 npm i --save-exact --save-dev nodemon@3.1.9 ts-node@10.9.2

 ## thêm node vào json để chạy k cần load
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["node_modules"],
  "exec": "ts-node ./src/app.ts"
}


## dùng env

npm install --save-exact dotenv@16.4.7

## Template Engine ejs
npm install --save-exact ejs@3.1.10
npm i --save-exact --save-dev @types/ejs@3.1.5

## bug  
{
    "version": "1.0.0",
    "configurations": [
        {
            "name": "debug-hoidanit",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceRoot}",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run",
                "start:debug"
            ]
        }
    ],
}
  
     "start:debug": "nodemon --inspect=9229 -e ts,tsx --exec node -r ts-node/register ./src/app.ts"


## MYSQL2 
npm i --save-exact mysql2@3.12.0

##  cấu hình baseurl 
vào file tsconfig.json 

có thêm 2 mục baseurl vaf paths

npm i --save-dev --save-exact tsconfig-paths@4.2.0

sữa package.json 
"exec": "ts-node -r tsconfig-paths/register ./src/app.ts"

sữa lại tiếp 
    "start:debug": "nodemon --inspect=9229 -e ts,tsx --exec node -r ts-node/register -r tsconfig-paths/register ./src/app.ts"



## câu hình prisma
npm i --save-dev --save-exact prisma@6.3.0
npx prisma init

vào sữa file prisma => .env nữa 

npm i --save-exact @prisma/client@6.3.0












