import React, { FC } from 'react'
import './Countdown.css'
interface Props {
    today: number;
}
const Countdown: FC<Props> = ({today}) => {
    var closing= new Date("Dec 15, 2022, 16:00:00").getTime();
    var count=closing-today;
    var days=Math.floor(count/(24*60*60*1000)); //base only need to write this on paper to confirm these calculations
    var hours=Math.floor( (count-days)/(60*60*1000));
    var minutes= Math.floor((count-days-hours)/(60*1000));
    var seconds= Math.floor((count-days-hours-minutes)/1000);
    return (
        <div className="box">


        </div>
    )}
export default Countdown