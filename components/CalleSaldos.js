import {formatoNumero} from "helpers/formato"
import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import { toast } from 'react-toastify'


const ListadoSaldosFecha = ({saldo}) => {
    
    const {fecha,espesor,ancho,largo,piezas,calidad,calle,id} = saldo
    const {setCalle} = useCombustible();
    const [newcalle, setNewCalle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            await axios.post(`/api/agregarcalle/${id}`, 
            { 
                calle: newcalle
    
            });
            setCalle(newcalle);
    
            } catch (error) {
            console.log(error);
            }
        };
    
        useEffect(() => {
        setNewCalle(calle);
        
        }, [  
            calle
        ]);
    
        function reloadPage() {
            toast.success(`Agregando calle al saldo n° ${id}`);
            setTimeout(() => {
                window.location.reload();
            }, 3000); 
        }
        


  return (
    
    <>
        
            <div className="border rounded-lg">
                <div className="">
                    <h1 className="font-bold">N° {id}</h1>
                    <h2 className="font-bold">{espesor}x{ancho}x{largo}</h2>
                    <p className="font-semibold">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )} m³</p>
                    <p className="font-medium">{calidad}</p>
                    <p className=" font-light">Calle N°</p>
                    <div className="grid grid-cols-2 shadow-lg gap-2 py-2 pb-0">
                        <div className="">
                            {calle}
                        </div>
                        <div>
                        <form onSubmit={handleSubmit} className=''>
    <div className="grid grid-cols-2 pb-2">      
        <div className="">
            <div className="">            
                <select 
                    id="calle" 
                    className='text-center w-full' 
                    value={newcalle} 
                    onChange={(event) => setNewCalle(event.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>             
            </div>
        </div>
                    
        <div className="">
            <div className="">
                <label htmlFor="actualizar" className=""></label>
                <button onClick={reloadPage} type="submit" className=''>♻️</button>
            </div>
        </div>            
    </div>
</form>
                        </div>

                        
                    </div>
                    
                </div>
            </div>

            
    </>
  )
}

export default ListadoSaldosFecha