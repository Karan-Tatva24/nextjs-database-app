import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "customer"
}

export default async function Page({ searchParams }: {
    searchParams: {
        query?: string,
        page?: string
    }
}) {
    const query = searchParams?.query || "";
    let customerDetails = [];
    if (query) {
        customerDetails = await fetchFilteredCustomers(query);
    } else {
        const fetchedCustomers = await fetchCustomers();
        for (let i = 0; i < fetchedCustomers.length; i++) {
            const customer = await fetchFilteredCustomers(fetchedCustomers[i].name);
            customerDetails.push(customer);
        }
    }

    return <CustomersTable customers={customerDetails.flat()} />
}