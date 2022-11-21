import React, { FC } from 'react'
import './RaffleCountdown.css'
import Countdown, { zeroPad } from 'react-countdown';

interface Props {
}
const RaffleCountdown: FC<Props> = () => {
    var today = Date.now();
    var closing = new Date("Nov 30, 2022, 12:15:00");
    const done = today > closing.getTime();

    const rafflecountdown = ({ days, hours, minutes, seconds }: { days: number, hours: number, minutes: number, seconds: number }) => {
        return (
            
                <div className='counter'>
                    <div className='numb'><div>{zeroPad(days, 2)}</div><div className='mini'>DAYS</div></div>
                    <div className='numb'> : </div>
                    <div className='numb'><div>{zeroPad(hours, 2)}</div><div className='mini'>HOURS</div></div>
                    <div className='numb'> : </div>
                    <div className='numb'><div>{zeroPad(minutes, 2)}</div><div className='mini'>MINUTES</div></div>
                    <div className='numb'> : </div>
                    <div className='numb'><div>{zeroPad(seconds, 2)}</div><div className='mini'>SECONDS</div></div>
                </div>
        )
    };

    return (
        <div className="timerbox">
            <div className='counter-title'>THE RAFFLE</div>
            {done ?
                    <h3 className='raffled'><div>It's time to raffle!</div> <div>May the odds be ever in your favour</div></h3>
                :
                <Countdown date={closing} renderer={rafflecountdown} />
            }
            <div className='exposition'> The winners will be drawn November 30, 2022 live on Facebook and will be contacted via email.</div>
        </div>
    )
}


export default RaffleCountdown