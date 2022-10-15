/* eslint-disable no-undef */

//import parse from "pg-connection-string"
//let config = parse('postgres://wesley:root@localhost:5432/postgres')

import Pool from "pg-pool"


const pool  = new Pool({
  

user:process.env.PGUSER ,
host:process.env.PGHOST ,
database:process.env.PGDATABASE ,
password:process.env.PGPASSWORD ,
port:process.env.PGPORT,

})

export default pool

/*USER="wesley"
PGHOST="localhost"
PGPASSWORD="root"
PGDATABASE="postgres"
PGPORT=5432*/
//DATABASE_URL=postgresql://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}
/*PGDATABASE=railway
PGHOST=containers-us-west-52.railway.app
PGPASSWORD=lAOtc5UyUs51GUCd8xE0
PGPORT=7198
PGUSER=postgres

PGUSER="wesley"
PGHOST="localhost"
PGPASSWORD="root"
PGDATABASE="postgres"
PGPORT=5432*/