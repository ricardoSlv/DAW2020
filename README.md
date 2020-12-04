# DAW2020 
# A84123
Web Aplication Development Homework

# T1
https://daw-tpc1-cat-gallery.netlify.app/

# T3 
https://daw-tpc3-arqueo-record.netlify.app/index.html

# T4
https://daw-tpc4.herokuapp.com/

# T5
https://daw-tpc5.herokuapp.com/ 

Json-server usado está limitado 10kb \
http://localhost:4000 é usado se process.env.DB_SERVER não for especificado \
https://github.com/ricardoSlv/DAW-TPC5-DB \
https://my-json-server.typicode.com/ricardoslv/DAW-TPC5-DB/

# T6
https://daw-tpc5.herokuapp.com/ 

Json-server usado sofre as limitações do anterior. \
Nesta versão é visivel também que os posts/puts/patches são falsos (O json-server responde ok mas não guarda as alterações) e que este rejeita deletes. \
O webserver funciona normalmente se for fornecido um json-server não limitado

# T7
https://daw-tpc7.herokuapp.com/ 

# T8
https://daw-tpc8.herokuapp.com/ 
O servidor é efémero, todos os uploads são perdidos quando ocorre um restart, porem as entradas são mantidas na base de dados, algumas entradas poderão portanto apontar para ficheiros não existentes. \
No caso de um ficheiro como o mesmo nome ser uploaded, este substituirá o anterior.
