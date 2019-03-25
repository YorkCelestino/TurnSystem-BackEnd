export default {
    database:{
        host: 'localhost',
        user:'root',
        password:'',
        database:'sistema de turno',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }   
    }
}