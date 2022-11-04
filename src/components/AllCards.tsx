import React, { FC } from 'react'

import {CompanyCard} from './CompanyCard/CompanyCard'

interface Props {
    placeholder: string;
}

const AllCards: FC<Props>= ({ placeholder }) =>{
  return (
    <div style={{display: "flex", flexDirection: "row", marginTop: "300px", gap: "10px"}}>
        <CompanyCard 
					image="var(--armada-green)"
					companyName="Volvo Automotive"
					tags={["workshop", "mingle"]}
					starred={true}
					onStar={() => console.log("on-star")}
					ticketState={"available"}
					receivedTickets={0} />
        <CompanyCard 
					image="var(--armada-green)"
					companyName="Volvo Automotive"
					tags={["workshop", "mingle"]}
					starred={true}
					onStar={() => console.log("on-star")}
					ticketState={"none available"}
					receivedTickets={0} />
        <CompanyCard 
					image="var(--armada-green)"
					companyName="Volvo Automotive"
					tags={["workshop", "mingle"]}
					starred={true}
					onStar={() => console.log("on-star")}
					ticketState={"received"}
					receivedTickets={10} />
    </div>
  )
}



export default AllCards