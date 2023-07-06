import React from "react"

const Contacto = (props) => {
  return (
    <div>
      <section>
            <p>Por lo general siempre surgen consultas de nuestra forma de trabajar, de nuestros diseños, o de nuestros plazos.</p>
            <p>Aquí vas a poder evacuar todas estás dudas y más.</p>
      </section>
        <section>
            <p>Dejanos tus datos junto con tu consulta para poder contactarnos contigo.</p>
        </section>

      <section>
        <form>
          <label>
            Nombre
            <input type="text" name="nombre"/>
          </label>
          <label>
            Consulta
            <input type="text" name="consulta"/>
          </label>
          <input type="submit" value="Enviar"/>
        </form>
      </section>
    </div>
  )
};

export default Contacto;
