export default class TableService {
  getTablaTotal(fechaDesde, fechaHasta, categoriaSeleccionada) {
    return fetch(
      `http://localhost:8080/maquinaria?fromdate=${fechaDesde}&todate=${fechaHasta}&tipomaquinaria=${categoriaSeleccionada}`
    ).then(res => res.json());
  }

  getTipoMaquinarias() {
    return fetch("http://localhost:8080/maquinaria/categoria").then(res =>
      res.json()
    );
  }
}
