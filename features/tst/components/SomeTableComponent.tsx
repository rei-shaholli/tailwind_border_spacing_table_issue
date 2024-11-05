'use client'

export default function SomeTableComponent() {
    return <table className="table-auto w-full shadow-lg mt-5 rounded border-separate border-spacing-y-14">
        <thead className="text-left text-gray-500 tracking-wider">
        <tr>
            <th className="p-4">Chapter Number</th>
            <th className="p-4">Chapter Name</th>
            <th className="p-4">Added at</th>
            <th className="p-4">Status</th>
        </tr>
        </thead>
        <tbody className="">
        <tr className="bg-card rounded text-gray-200 bg-neutral-900">
            <td className="p-4">60001</td>
            <td className="p-4"></td>
            <td className="p-4">6/21/2022</td>
            <td className="p-4">Not published</td>
        </tr>
        <tr className="bg-card rounded text-gray-200 bg-neutral-900">
            <td className="p-4">60001</td>
            <td className="p-4"></td>
            <td className="p-4">6/21/2022</td>
            <td className="p-4">Not published</td>
        </tr>
        </tbody>
    </table>
}