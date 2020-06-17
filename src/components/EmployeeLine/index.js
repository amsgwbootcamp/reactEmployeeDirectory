return (
    <tr>
      <th scope="row"><img alt={props.name}  src={props.image} /></th>  
      <td >{props.name}</td>
      <td >{props.}</td>
      <td >{props.email}</td>
      <td >{props.phone}</td>
      <td >{props.dob}</td>
    </tr>
  );
}