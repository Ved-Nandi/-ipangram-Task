import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { IForm } from "../form";

type Props = {
  formData: IForm[],
}

const columns: GridColDef[] = [
  {
    field: 'diagnosed_with_problem', headerName: 'diagnosed with problem', flex: 1,
    minWidth: 150,
  },
  {
    field: 'physical_trauma_start_after', headerName: 'physical trauma start after', flex: 1,
    minWidth: 150,
  },
  {
    field: 'mental_trauma_start_after', headerName: 'mental trauma start after', flex: 1,
    minWidth: 150,
  },
  {
    field: 'how_often_do_you_experi_problem', headerName: 'how often do you experi problem', flex: 1,
    minWidth: 150,
  },
  {
    field: 'notRelevent', headerName: 'When do u experiance the probem?',
    renderCell: (params) => (<>
      {
        `
        ${params.row.notRelevent},
        ${params.row.whenLyingDown},
        ${params.row.whenSitting},
        ${params.row.whenStanding},
        ${params.row.whenWalking},
        ${params.row.other},
        `
      }
    </>),
    flex: 1,
    minWidth: 150,

  },
  {
    field: 'how_intensive_is_the_experience', headerName: 'how intensive is the experience', flex: 1,
    minWidth: 150,
  },

];
const Table = ({ formData }: Props) => {
  console.log({formData})
  return (
    <div style={{ minHeight: '70vh', width: '100%', marginTop: '1rem' }}>
      <DataGrid rows={formData} columns={columns} />
    </div>
  )
}

export default Table