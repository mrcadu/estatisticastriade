import mysql from 'mysql'


async function getTriade() {
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'cadu',
        password : 'ka323212',
        database : 'tarefas',
    });
    await connection.connect();
    const quantidade_importante = await connection.query("SELECT COUNT (triade_oid) AS triade FROM Tríade t where t.Importante = 1 ;");
    const quantidade_urgente = await connection.query("SELECT COUNT (triade_oid) AS triade FROM Tríade t where t.Urgente = 1 ;");
    const quantidade_circunstancial = await connection.query("SELECT COUNT (triade_oid) AS triade FROM Tríade t where t.Circunstancial = 1 ;");
    return {
        importante: quantidade_importante,
        circunstancial: quantidade_circunstancial,
        urgente: quantidade_urgente
    };
}