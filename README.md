# Tailwind CSS Classes Not Applying in Next.js App Router with Nested Component

## Description

When using Tailwind CSS with Next.js (App Router), certain table-specific Tailwind classes such as border-separate and
border-spacing-y-* are not applied if the `<table>` is embedded within a nested component that is then used inside a
route (e.g., page.tsx). However, if the `<table>` is directly in the route file, the styles are applied correctly.

## Steps to Reproduce

1. Create a new Next.js project with the App Router and Tailwind CSS installed. (such as this one)
2. Create a new component (e.g., Table.tsx) that contains a `<table>` with Tailwind CSS classes in question (
   border-separate and border-spacing-y-*). Ex:
   ```tsx
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
   ```
3. Import the component into a route file (e.g., index.tsx) and use it. Ex:
   ```tsx
   import SomeTableComponent from "@/features/tst/components/SomeTableComponent";

   export default function Home() {
   return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <SomeTableComponent />
     </main>
   );
   }
   ```

4. Run the Next.js development server and inspect the rendered table.

    - When `<SomeTableComponent />` is used within a route file (page.tsx), the `border-separate` and
      `border-spacing-y-3` classes are not applied to the `<table />` element. As a result, no spacing appears between
      rows.
    - If the `<table>` is defined directly in page.tsx without being nested in a separate component, the
      `border-separate` and `border-spacing-y-3` styles are applied correctly, and spacing appears between rows as
      expected.

5. Please refer to the `./app/test/page.tsx` and `./app/test/components/SomeTableComponent.tsx` files for the relevant
   code.