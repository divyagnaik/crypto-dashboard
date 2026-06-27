import { useCryptos } from "../../hooks/useCryptos";
import {
    Table,
    TableCell,
    TableRow,
} from "../../../@/components/ui/table";
import Spinner from "../../../@/components/ui/Spinner"; // Import Spinner component
import Error from "../../../@/components/ui/Error"; // Import Spinner component

const MarketTable = () => {
    const { data, isLoading, error } = useCryptos();

    if (isLoading)
        return <Spinner />;

    if (error)
        return <Error />;

    return (
        <Table>
            {data.map((coin) => (
                <TableRow key={coin.id}>
                    <TableCell>{coin.name}</TableCell>
                    <TableCell>{coin.current_price}</TableCell>
                </TableRow>
            ))}
        </Table>
    );
};

export default MarketTable;