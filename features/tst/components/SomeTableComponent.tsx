'use client'

export default function SomeTableComponent() {
    return (
        <table className="table-auto w-full shadow-lg mt-5 rounded border-separate border-spacing-y-3">
            <thead className="text-left text-gray-500 tracking-wider">
            <tr>
                <th className="p-4">Col A</th>
                <th className="p-4">Col B</th>
                <th className="p-4">Col C</th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-card rounded text-gray-200 bg-neutral-900">
                <td className="p-4">Value A</td>
                <td className="p-4">Value B</td>
                <td className="p-4">Value C</td>
            </tr>
            </tbody>
        </table>
    );
}