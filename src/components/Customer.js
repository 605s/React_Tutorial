import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Customer(pp) {
    return(
        <TableRow>
            <TableCell>{pp.id}</TableCell>
            <TableCell>{pp.name}</TableCell>
            <TableCell>{pp.birthday}</TableCell>
            <TableCell>{pp.gender}</TableCell>
            <TableCell>{pp.job}</TableCell>
        </TableRow>
    );
}

export default Customer