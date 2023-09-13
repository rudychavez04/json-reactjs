import './DataContainer.css'

const DataContainer = (props) => {
  return (
    <>

      <section className="data__section">
        <h1 className="data__title">Datos de JSON </h1>
        <div className="data__container">
          {props.children}
        </div>
      </section>
    </>

  )
}

export { DataContainer }