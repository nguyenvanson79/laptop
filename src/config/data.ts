import mysql from 'mysql2/promise';

const getConnection = async () => {
  
    // Tạo kết nối đến MySQL
    const connection = await mysql.createConnection({
      port: 3306,          
      host: 'localhost',   
      user: 'root',        
      database: 'nodejs',  
      password: '123456'   
    });
return connection ;
   
}

export default getConnection;
