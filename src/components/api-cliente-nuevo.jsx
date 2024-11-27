import { revalidatePath } from "next/cache";
import SubmitButton from "@/components/submit-button";


async function nuevoCliente(formData) {
    'use server'
    const [nombre, descripcion, precio] = formData.values()

    const response = await fetch('http://localhost:4000/clientes', {
        method: 'POST',
        body: JSON.stringify({ nombre, descripcion, precio: +precio, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    revalidatePath('/clientes-api')
}



function ProductNew() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Nombre</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='descripcion'>Descripción:</label>
            <input required id='descripcion' name='descripcion' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='precio'>Precio</label>
            <input required id='precio' name='precio' type='number' step='0.01' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <SubmitButton formAction={nuevoCliente} className='disabled:bg-slate-600 bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar cliente
                </SubmitButton>
                <button type='reset' className='bg-blue-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default ProductNew;