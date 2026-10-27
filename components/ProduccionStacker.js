
import { formatoNumero } from "helpers/formato";
import { format, parseISO, isValid } from "date-fns";

const ListadoProduccion = ({ producciones }) => {
  const { volumen, fecha, ingreso } = producciones;

  const obtenerFechaValida = (valor) => {
    if (!valor) return null;

    const fechaConvertida =
      valor instanceof Date
        ? valor
        : typeof valor === "string"
          ? parseISO(valor)
          : new Date(valor);

    return isValid(fechaConvertida) ? fechaConvertida : null;
  };

  const fechaS = obtenerFechaValida(fecha);

  const fechaFormateada = fechaS
    ? format(fechaS, "MMMM dd")
    : "Fecha no válida";

  const volumenNum = Number(volumen) || 0;
  const ingresoNum = Number(ingreso) || 0;

  return (
    <table className="table-auto w-full text-center bg-white text-gray-700">
      <tbody>
        <tr className="bg-white border-b hover:bg-lime-300 text-sm">
          <td className="px-2 py-1 w-1/5 text-center border border-lime-400">
            {fechaFormateada}
          </td>
          <td className="px-2 py-1 w-1/5 text-center border border-lime-400">
            {volumenNum}
          </td>
          <td className="px-2 py-1 w-1/5 text-center border border-lime-400">
            {formatoNumero(volumenNum / 9)}
          </td>
          <td className="px-2 py-1 w-1/5 text-center border border-lime-400">
            {ingresoNum}
          </td>
          <td className="px-2 py-1 w-1/5 text-center border border-lime-400">
            {formatoNumero(ingresoNum / 9)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListadoProduccion;

