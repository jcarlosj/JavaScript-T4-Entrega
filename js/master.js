window .onload = () => {
    // Simula Base de Datos con valores por defecto
    var people = {
        '1564604393562': { 'name': 'Elisa María' },
        '1564604443863': { 'name': 'Luisa María' },
        '1564604455736': { 'name': 'Laura Zapata' },
        '1564607536489': { 'name': 'Ana María' },
        '1564607703417': { 'name': 'Juliana' },
    }

    // Class con CRUD de datos
    class Data {
        constructor( data ) {
            this .data = data;
            console .log( Date .now() ); 
        }
        create( name ) {
            let id = Date .now();
            this .data[ id ] = Object .create({});
            this .data[ id ][ 'name' ] = name;
            return this .data;
        }
        read( id ) {
            return this .data[ id ];
        }
        update( id, name ) {
            this .data[ id ] .name = name;
        }
        delete( id ) {
            delete this .data[ id ];
        }
    }

    let peopleList = new Data( people );                // Instancia

    console .log( 'Inicial',  peopleList .data );       // Estructura de datos inicial

    peopleList .create( 'Juan Carlos' );                // Crea nuevo objeto
    console .log( peopleList .read( 1564604443863 ) );  // Muestra un objeto específico
    peopleList .update( 1564604455736, 'Yoka Leis' );   // Actualiza un objeto específico
    peopleList .delete( 1564607703417 );                // Elimina un objeto específico
    
    console .log( 'Final', peopleList .data );          // Estructura de datos final

}