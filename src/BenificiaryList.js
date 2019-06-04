import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#ff6200",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14
    },
}))(TableCell);

class BenificiaryList extends Component {

    removeBenificiary = (e, item) => {
        e.preventDefault();
        this.props.removeClick(item);
      };

    render() {
        return (
            <div>
                <h3 className="pt-4 pb-4" style={{ color: "#ff6200" }}> Click  <Link to="/addBenificiary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg></Link> to add Benificiary </h3>
                <Table>
                    <TableHead>
                        <CustomTableCell><strong>Benificiary Name</strong></CustomTableCell>
                        <CustomTableCell><strong>Account Number</strong></CustomTableCell>
                        <CustomTableCell><strong>Benificiary Account Number</strong></CustomTableCell>
                        <CustomTableCell><strong>IFSC Code</strong></CustomTableCell>
                        <CustomTableCell><strong>Delete</strong></CustomTableCell>
                        <CustomTableCell><strong>edit</strong></CustomTableCell>
                    </TableHead>
                    <TableBody className="table-hover">
                        {
                            this.props.Benificiarylist.map((item, i) => {
                                return (
                                    <TableRow className="table table-info table-striped" key={i}>
                                        <TableCell>{item.beneficiaryName}</TableCell>
                                        <TableCell>{item.accountNumber}</TableCell>
                                        <TableCell>{item.beneficiaryAccountNumber}</TableCell>
                                        <TableCell>{item.ifsccode}</TableCell>
                                        <TableCell><DeleteIcon onClick={e => this.removeBenificiary(e, item)}
                                        /></TableCell>
                                        <TableCell>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>

        );
    }
}

export default BenificiaryList;