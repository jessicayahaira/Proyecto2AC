export function C_simplePage() {
    return (<div>
        <h1 className="title">PAGINA SIMPLE DE CONTABILIDAD</h1>
        <div className="container">
            <form className="formulario">
            <div>
                <label htmlFor="codigo">Codigo: </label> 
                    <input className="codigo" type="text" name="codigo" />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input className="nombre" type="text" name="nombre" />
                </div>
               
                <input className="boton" type="submit" value="Insertar" />
            </form>
        </div>

        <h2 className="resultado"></h2>

    </div>);
}