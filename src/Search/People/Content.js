import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { ExportToCsv } from 'export-to-csv'; //or use your library of choice here
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Button } from '@mui/material';
import {
    Link
} from "react-router-dom";
import '../search.scss'

//nested data is ok, see accessorKeys in ColumnDef below


const Content = ({ data }) => {
    //should be memoized or stable
    console.log({ data })

    const columns =
        [
            {
                accessorKey: 'display_name',
                header: 'Name',
                size: 200,
                Cell: ({ renderedCellValue, row }) => (
                    <Link className='link' to={`/profile/${row.original.macmorris_id}`}>
                        <span>{renderedCellValue}</span>
                    </Link>
                ),
            },
            {
                accessorKey: 'date_of_birth',
                header: 'Date of birth',
                size: 100,
            },
            {
                accessorKey: 'date_of_death',
                header: 'Date of death',
                size: 100,
            },
            {
                accessorKey: 'flourishing_date',
                header: 'Date of flourishing',
                size: 100,
            },
            {
                accessorKey: 'gender.name',
                header: 'Gender',
                size: 50,

            },
            {
                accessorFn: (row) => `${[...new Set(row.attribs.map(a => a.name))].join(",")}`, //accessorFn used to join multiple data into a single cell
                id: 'roles', //id is still required when using accessorFn instead of accessorKey
                header: 'Roles',
                size: 200,
            },

        ]


    const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header),
    };

    const csvExporter = new ExportToCsv(csvOptions);

    const handleExportData = () => {

        const datacsv = data.map((e) => {
            const {id, macmorris_id, gender, attribs, ...newObj} = e
            const g = {"gender" : gender.name}
            const a = {"attribs": attribs.reduce((acc, e) => {
                if(!acc.includes(e.name)){ acc.push(e.name)}
                return acc
            }, []).join(',')}
            return {...newObj, ...g, ...a}
        })
        console.log({ datacsv })
        csvExporter.generateCsv(datacsv);
    };


    return <MaterialReactTable columns={columns} data={data}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: 'compact' }}
        enableStickyHeader
        renderTopToolbarCustomActions={({ table }) => (
            <button onClick={handleExportData}>
                <FileDownloadIcon />
            </button>

        )}
    />;
};

export default Content;
