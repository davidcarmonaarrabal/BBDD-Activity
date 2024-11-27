import Buscar from '@/components/buscar'
import Link from 'next/link'
import { revalidatePath } from 'next/cache'

async function obtenerClientes(query) {
    const response = await fetch('http://localhost:4000/clientes')
    const clientes = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return clientes.filter(cliente => cliente.nombre.toLowerCase().includes(query))
}


async function eliminarCliente(formData) {
    'use server'
    const id = formData.get('id')

    await fetch('http://localhost:4000/clientes/' + id, { method: 'DELETE' })

    revalidatePath('/clientes-api')
}


async function Clientes({ query }) {
    const clientes = await obtenerClientes(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Lista de clientes (API)
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {clientes.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((cliente) => (
                        <div key={cliente.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/clientes-api/${cliente.id}`}>{cliente.nombre}</Link>
                            <div className='flex gap-6'>
                                <form>
                                    <input type="hidden" name='id' value={cliente.id} />
                                    <button formAction={eliminarCliente} title='ELIMINAR'>❌</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Clientes



