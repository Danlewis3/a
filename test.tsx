
import { useState } from 'react';
import Button from '~/core/ui/Button';
import Tile from '~/core/ui/Tile';
import Modal from '~/core/ui/Modal';
import { useCurrentOrganization } from '~/lib/organizations/hooks/use-current-organization';
import useFetchCustomers from '~/lib/customer/hooks/use-fetch-customers';
import React from 'react';
import Label from '~/core/ui/Label';

  
const CustomerManagement = () => {
 
const[record,setRecord] = useState([])
const [isOpen, setIsOpen] = useState(false);
const organization = useCurrentOrganization();
const organizationId = organization?.id as string;

const customers = useFetchCustomers(organizationId)
const data = customers.data
console.log("data",data)
console.log("org",organizationId)
console.log("customerdata",customers.data)
const Heading = <>Edit Customer</>;


type Item =
{
  organizationId: string
        FirstName: string
        Surname: string
        AddressLine1: string
        AddressLine2: string
        Town: string
        Postcode: string
        PrimaryMobileNumber: string
        EmailAddress: string
        Active: boolean
        CreatedOn: Date
}


    return (
  <div>
  <Tile>
  <Tile.Heading>{Heading}</Tile.Heading>
      <table className={'Table'}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {data && data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.FirstName} {item.Surname}</td>
            <td>{item.AddressLine1}, {item.Town}, {item.Postcode}</td>
            <td>{item.PrimaryMobileNumber}</td>
            <td>{item.EmailAddress}</td>
            <td>{item.Active}</td>
            <td> <Button onClick={(handleClick) => setIsOpen(true)} >Edit</Button></td>
          </tr>
        ))}
        
      </tbody>
           </table>

</Tile>  
        <Modal heading={Heading} isOpen={isOpen} setIsOpen={setIsOpen} >
          <div><Label >tyttt</Label></div>
        </Modal>
  </div>

 

    )

}
  

export default CustomerManagement 
