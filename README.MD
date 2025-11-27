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








