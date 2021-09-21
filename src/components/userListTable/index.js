import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';

import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ProfileImage from '../../assets/images/profile.png';
import { InputText } from 'primereact/inputtext';
import AuthService from '../../services/AuthService';
import { Link,useHistory } from 'react-router-dom'
import './DataTableDemo.css';
import swal from 'sweetalert';

const DataTableDemo = () => {
    let history = useHistory();
    const [customers, setCustomers] = useState(null);
    const [ val, setVal ] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const getToken = localStorage.getItem("token");
    const dt = useRef(null);

    useEffect(() => {
      AuthService.allUserList(getToken).then(data => setCustomers(data.data.data));
    }, [val]); // eslint-disable-line react-hooks/exhaustive-deps

    const renderHeader = () => {
        const logout = async () => {
            await swal({
              icon: 'warning',
              title: 'Are you sure?',
              text: 'Are you sure you want to do logout?',
              buttons: ["cancel", true]
            }).then((result) => {
              if (result) {
                localStorage.removeItem('tokens');
                localStorage.clear()
                history.push("/login")
              } else {
                return false;
              }
            });
          }
        return (
            <div className="table-header">
                List of Users
                <div className="search-areabox">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText  type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                    </span>
                    <span className="button-drop"> 
                        <li className="dropdown rebecca_profilelist list-inline-item"><Link data-toggle="dropdown" to="#"><img alt="profile.png" src={ProfileImage} className="dashboardheader" /></Link>
                        <ul className="dropdown-menu">
                        <li><Link to="#" onClick={logout}><i className="fa fa-power-off"></i>Log-out</Link></li>
                        </ul>
                        </li>
                    </span>
                </div>
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">VERIFICATION STATUS</span>
                {rowData.isVerifiedString}
            </React.Fragment>
        );
    }

    const pinCodeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">PINCODE</span>
                {rowData.pinCode}
            </React.Fragment>
        );
    }

    const TransactionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">TRANSACTION ID</span>
                {rowData.transactionId}
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">USERNAME</span>
                {rowData.userName}
            </React.Fragment>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">EMAIL ADDRESS</span>
                <span>{rowData.email}</span>
            </React.Fragment>
        );
    }
    const onVerify =(val) => {
        AuthService.verified(getToken, val._id).then((results)=> {
            setVal(true);
            swal('success', results.data.message, 'success')
        })

    }

    const activityBodyTemplate = (val) => {
        return(
            <>
                {val.isVerifiedString === "Pending" ? <Button type="button" onClick={()=>onVerify(val)}>Verify</Button> : <Button type="button" disabled={true} >Verified</Button>}
            </>
        )
    }

    const header = renderHeader();
    let data = customers && customers.length > 0 && customers?.map((val)=> {
        val.isVerifiedString  = val.isVerified === false ? "Pending": "Success";
        // Object.assign(val, val.isVerified ? {isVerified:"Pending"} : {isVerified:"Success"})
        return val;
    })
    return (
        <div className="datatable-doc-demo">
            <div className="card datatablecard-height">
                <DataTable ref={dt} value={data}
                    header={header} className="p-datatable-customers" dataKey="_id" rowHover globalFilter={globalFilter}
                    selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    paginator rows={10} emptyMessage="No customers found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column selectionMode="multiple" style={{width:'3em'}}/>
                    <Column field="userName" header="USERNAME" body={nameBodyTemplate} sortable filter filterPlaceholder="Search by USERNAME"/>
                    <Column field="email" header="EMAIL ADDRESS" body={dateBodyTemplate} sortable filter filterPlaceholder="Search by email"/>
                    <Column field="transactionId" header="TRANSACTION ID" body={TransactionBodyTemplate} sortable filter filterPlaceholder="Search by TransactionId" />
                    <Column field="pinCode" header="PINCODE" body={pinCodeBodyTemplate} sortable filter filterPlaceholder="Search by Pincode" />
                    <Column field="isVerifiedString" header="VERIFICATION STATUS" body={statusBodyTemplate} sortable filter filterPlaceholder="Search by verification" />
                    <Column field="activity" header="Action" body={activityBodyTemplate}  />
                </DataTable>
            </div>
        </div>
    );
}

export default DataTableDemo;