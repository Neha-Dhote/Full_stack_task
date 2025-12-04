import React, { useState } from 'react'
import React, { useState, useEffect } from 'react'
import { DisplayFormEntries } from './DisplayFormEntries'

const Comp2 = () => {


}

const displayFormEntries = (item, index) => {
    return (
        <tr key={index} className="bg-neutral-primary border-b border-default">
            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                {item.name}
            </th>
            <td className="px-6 py-4">
                {item.phone}
            </td>
            <td className="px-6 py-4">
                {item.email}
            </td>
            <td className="px-6 py-4">
                {item.address}
            </td>
            <td className="px-6 py-4">
                {item.password}
            </td>
        </tr>
    )
}
// whenever a component in mounted/re-mounted the effect hook will get calleg

useEffect(() => {
    // data fetch (Example profile fetch)
    // validation
    // page protect

    console.log("Effect hook ran!")
}, [formEnteries, form])

return (
        <div id='form'>
            </thead>
            <tbody>
                {
                    formEnteries.map(displayFormEnteries)
                    formEnteries.map(
                        (item) => {
                            return <DisplayFormEnteries itemToDisplay={item} />
                        }
                    )
                }
         )
            </tbody>
            </table >
        </div >

 export default Comp2