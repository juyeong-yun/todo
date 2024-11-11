import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// DB연결
/**
 * pool : 데이터 베이스 연결을 효율적으로 관리하기 위해
 * 여러개의 연결을 미리 만들고 필요할때마다 빌려쓰고 반환하는 형식
 * 요청이 끝난 후, 자동으로 풀에 반환되기 때문에 연결이 계속 열리는 걸 방지할 수 있다.
 */
const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : process.env.MYSQL_PW,
    database : process.env.MYSQL_DATABASE
});

export default pool.promise();