import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};
const TableBody = props => {

    const rows = props.characterData.map((row, index) => {
        console.log("row==>",row,index)
        console.log("index==>",index)
        return (
       
            <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
              <button className="btn btn-danger" onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        )
      })
    
      return <tbody>{rows}</tbody>
};
class Table extends Component {
  render() {
   
    const { characterData, removeCharacter } = this.props
    return (
       
      <div className="container">
<table className="table table-dark">
    <TableHeader></TableHeader>
   
    <TableBody characterData={characterData} removeCharacter={removeCharacter} ></TableBody>
</table>
      </div>
    );
  }
}

export default Table;
