import { Box } from "@chakra-ui/react";
import {getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {useState} from "react";
import DATA from "../data";
import React from "react";

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const columns = [
    {
      accessorKey: 'task',
      header: 'Task',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'due',
      header: 'Due',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'notes',
      header: 'Notes',
      cell: (props) => <p>{props.getValue()}</p>
    }
  ]



  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  console.log(table.getHeaderGroups());

  return (
      <Box>
    <Box className={"table"}>
      {table.getHeaderGroups().map((headerGroup) => (
          <Box className={"tr"} key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
            <Box className={"th"} key={header.id}>
              {header?.id}
            </Box>
            ))}
      </Box>
      ))}
      {
        table.getRowModel().rows.map((row) => <Box classname={"tr"} key={row.index})
      }
  </Box>
      </Box>
  );
};
export default TaskTable;
