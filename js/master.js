window .onload = () => {
    /** Simula Base de Datos con valores por defecto */
    var people = {
        /** 
         *  id:             1er Nivel de Profundidad del Objeto
         *  name, gender:   2do Nivel de Profundidad del Objeto
         */
        '1564604393562': { 'name': 'Elisa María', 'gender': 'female' },
        '1564604443863': { 'name': 'Luisa María', 'gender': 'female' },
        '1564604455736': { 'name': 'Laura Zapata', 'gender': 'female' },
        '1564607536489': { 'name': 'Ana María', 'gender': 'female' },
        '1564607703417': { 'name': 'Juliana', 'gender': 'female' },
    }

    // Class con CRUD de datos
    class DB {
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

    /** Pruebas de funcionalidad de CRUD sobre el Objeto */
    let peopleList = new DB( people ),                  // Instancia
        data = peopleList .data;

    console .log( 'Inicial',  peopleList .data );       // Estructura de datos inicial

    peopleList .create( 'Juan Carlos' );                // Crea nuevo objeto
    console .log( peopleList .read( 1564604443863 ) );  // Muestra un objeto específico
    peopleList .update( 1564604455736, 'Yoka Leis' );   // Actualiza un objeto específico
    peopleList .delete( 1564607703417 );                // Elimina un objeto específico
    
    console .log( 'Final', peopleList .data );          // Estructura de datos final

    // Itera por ID (1er Nivel de Profundidad del Objeto)
    for ( let id in data ) {

        // Valida que el id exista dentro del Objeto iterado
        if ( data .hasOwnProperty( id ) ) {
            let properties = Object .getOwnPropertyNames( data[ id ] );     // Obtiene todas las propiedades existentes del objeto
          
            console .group( `id = ${ id }` );
            //console .log( `${ properties }` );
            console .log( createUnorderListElement( id ) );

            // Itera propiedades (2do Nivel de Profundidad del Objeto)
            properties .forEach( property => {
                console .log( `${ property } = ${ data[ id ][ property ] }` );
            });
            console .groupEnd();

        }
    }
   
    function createUnorderListElement( value ) {
        let $ul = document .createElement( 'ul' );

        $ul .setAttribute( 'data-id', value );
        return $ul;
    }
    
    function createListItemElement() {
        let $li = document .createElement( 'li' ),
            $label = document .createElement( 'label' ),
            $span = document .createElement( 'span' ),
            $contentLabel = document .createTextNode( 'Propiedad' ),
            $contentSpan = document .createTextNode( 'Valor' );

        $label .appendChild( $contentLabel );    
        $span .appendChild( $contentSpan );
        $li .appendChild( $label );
        $li .appendChild( $span );

        console .log( $li );
    }
    createListItemElement();

}