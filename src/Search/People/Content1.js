import Table from 'react-bootstrap/Table';
import {
    Link
} from "react-router-dom";


const columns = [
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'dob', label: 'Date of Birth', minWidth: 100 },
    {
        id: 'dod',
        label: 'Date of Death',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'dof',
        label: 'Date of Flourishing',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'gender',
        label: 'Gender',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'roles',
        label: 'Roles',
        minWidth: 180,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function Content({ data }) {
    console.log("content data", data)
    return (
        <>
            {data && data.length === 0 &&
                <>
                    <h4 style={{ color: "silver" }}>
                        Oops! No Results found.
                    </h4>
                    <h5 style={{ color: "silver" }}>
                        Would you like to modify the search conditions?
                    </h5>
                </>
            }

            {data && data.length != 0 &&
                <Table striped>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((data) => (
                            <tr>
                                <td>
                                    <Link className='link' to={`/profile/${data.id}`}>
                                        {data.display_name}
                                    </Link>
                                </td>
                                <td>{data.date_of_birth}</td>
                                <td>{data.date_of_death}</td>
                                <td>{data.flourishing_date}</td>
                                <td>{data.gender?.name}</td>
                                {/* <td>{[...new Set(data.attribNames)].join(",")}</td> */}
                                <td>{[...new Set(data.attribs.map(a => a.name))].join(",")}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </>
    );
}

export default Content;
