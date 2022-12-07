import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';



type FormValues = {
  createRequest: string;
  areaRequest: string;
  descriptionRequest: string;
};

function Request() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  // console.log(errors);
  return (
    <div className=" flex flex-col gap-y-4 1048:grid 1048:grid-cols-2 1048:gap-x-6 1048:p-6">
      <div className="bg-white  px-2 rounded-2xl">
        <h2 className='font-semibold text-2xl my-6'>Realizar un reporte</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-6'>
            <h3 className='font-bold text-base mb-3'>Que deseas hacer?</h3>
            <select className='w-full font-bold text-sm text-reporte-textColor p-2 border border-reporte-borderColor rounded-lg' {...register("createRequest")}>
              <option value="Solicitar reparacion">Elige una opcion</option>
              <option value="Solicitar reparacion">Solicitar una reparacion</option>
              <option value="Crear reporte">Crear reporte</option>
              <option value="Objeto encontrado/perdido">Objeto encontrado/perdido</option>
            </select>
          </div>
          <div className='mb-6'>
            <h3 className='font-bold text-base mb-3'>Sobre que unidad/espacio?</h3>
            <select className='w-full font-bold text-sm text-reporte-textColor p-2 border border-reporte-borderColor rounded-lg' {...register("areaRequest")}>
              <option value="Quincho">Quincho</option>
              <option value="Alberca">Alberca</option>
              <option value="Asador">Asador</option>
              <option value="Gimnasio">Gimnasio</option>
              <option value="otro">otro</option>
            </select>
          </div>
          <div className=' flex flex-col'>
            <h3 className='font-bold text-base mb-3'>Observaciones</h3>
            <textarea className='p-2 border border-reporte-borderColor rounded-lg mb-6' placeholder='Nos puedes brindar mas detalles?' {...register("descriptionRequest", {})} />
            <input className='font-semibold text-lg mb-6' type="submit" value="Siguiente" />
          </div>
        </form>
      </div>
      <div className="px-2 bg-white rounded-2xl">
        <h2 className='font-semibold text-2xl my-6'>Reportes</h2>
        <table className='w-full mb-6'>
          <thead className='bg-background-table'>
            <tr className=' text-left'>
              <th className='font-Poppins text-sm whitespace-nowrap  p-3 rounded-l-md'>Ticket No.</th>
              <th className='font-Poppins text-sm whitespace-nowrap mx-4 hidden'>Fecha</th>
              <th className='font-Poppins text-sm whitespace-nowrap mx-4'>Asunto</th>
              <th className='font-Poppins text-sm whitespace-nowrap mx-4  rounded-r-md'>Estado</th>
            </tr>
          </thead>
          <tbody className=' w-full'>
            <tr className='border-b border-border-rowTable'>
              <td className=' text-xs p-3 text-medium2-blue font-medium
              '>#143567</td>
              <td className=' text-xs hidden text-vencimiento-gray font-normal'>22/09/22</td>
              <td className=' text-xs text-asunto-rowTable'>lorem ipsum</td>
              <td className=' text-xs '>En revision</td>
            </tr>
            <tr className='border-b border-border-rowTable'>
              <td className=' text-xs p-2 text-medium2-blue font-medium'>#113841</td>
              <td className='  text-xs hidden text-vencimiento-gray font-normal'>14/06/21</td>
              <td className=' text-xs text-asunto-rowTable'>lorem ipsum Lorem ipsum dolor si</td>
              <td className=' text-xs '>Resuelto</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div >
  );
};

export default Request;