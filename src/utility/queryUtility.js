
const commonQueries={

    selectAll:(table)=>`SELECT * from ${table}`,
    selectById:(table,idObj)=>`SELECT * from ${table} WHERE ${Object.keys(idObj)[0]}=${Object.values(idObj)[0]} ;`,
    insert:(table,valObj)=>{

        const columns = Object.keys(valObj);
        const placeholders = columns.map((_, index) => `$${index + 1}`).join(', ');
        const values = Object.values(valObj);

       const query= `INSERT INTO ${table} (${columns.join(', ')})  VALUES (${placeholders}) `

       return query;
       
    }
}


module.exports=commonQueries