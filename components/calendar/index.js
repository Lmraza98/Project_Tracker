import React, { useEffect, useState } from 'react'
import * as moment from 'moment'


const Circle = (props) => {
    if(props.color=="grey") return <div class="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white w-8 h-8 md:w-12 md:h-12">{ props.day }</div>

    return <div class="hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 w-8 h-8 md:w-12 md:h-12 md:w-12 bg-blue-400 rounded-full flex items-center justify-center text-white ">{ props.day }</div>
    
}
const CalendarContainer = ({children}) => {
    return <div class="flex flex-col items-center justify-center max-w-[100%]">{ children }</div>
}
const CalendarLayout = ({children}) => {
    return <div class="flex flex-col items-center justify-center md:max-w-[90%] sm:max-w-[80%]">{ children }</div>
}
const Month = ({ month, year }) => {
    return <div><div>{ month }</div><div>{year}</div></div>
}
function Calendar() {
    const [ date,  setDate] = useState(new Date())
    const [ month,  setMonth] = useState(date.getMonth())
    // const [ firstDay, setFirstDay ] = useState(null)

    const monthMap = new Map()
    monthMap.set(0, "January")
    monthMap.set(1, "February")
    monthMap.set(2, "March")
    monthMap.set(3, "April")
    monthMap.set(4, "May")
    monthMap.set(5, "June")
    monthMap.set(6, "July")
    monthMap.set(7, "August")
    monthMap.set(8, "September")
    monthMap.set(9, "October")
    monthMap.set(10, "November")
    monthMap.set(11, "December")

    // let date = new Date()
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);

    const days = []
    const dayNames = moment.weekdaysShort()
    for(let i = 1; i <= lastDay.getDate(); i++)
    {
        days.push(i)
    }


    let lastMonth = new Date(firstDay.getFullYear(), firstDay.getMonth(firstDay.getMonth() - 1))
    let lastMonthLastDay = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 0)
    let dayOfWeek = firstDay.getDay()
    let startingDate = lastMonthLastDay.getDate() - dayOfWeek + 1

    
    console.log("lastmonthlastday" + lastMonthLastDay.getDate())
    let previousMonthDays = new Array(dayOfWeek).fill(0)
    let i = 1;
    let remainingDays = new Array(6 - lastDay.getDay()).fill(i)
    
    

    const handleClick = (e) => {
        if(e.target.value==='next')
        {
            setDate(new Date(date.getFullYear(), date.getMonth() + 1))
        }else if(e.target.value==='back')
        {
            setDate(new Date(date.getFullYear(), date.getMonth() - 1))
        }
    }
    useEffect( () => {
        setDate(new Date(date.getFullYear(), month, 1))
    },[month])
    return (
        <CalendarContainer>
            <CalendarLayout>
            <Month year={firstDay.getFullYear()} month={monthMap.get(firstDay.getMonth())}/>
            <button value='back' onClick={handleClick}>previous month</button>
            <button value='next' onClick={handleClick}>next month</button>
                <div class=' grid grid-cols-7 md:gap-6 gap-4 content-center'>
                {
                    dayNames.map( (day) => {
                        return <div class="flex items-center justify-center">{day}</div>
                    })
                }
                {
                    previousMonthDays.map( (day) => {
                        return <Circle color="grey" day={startingDate++}/>
                    })
                }
                {
                    days.map( (day) => {
                        return <Circle color="blue" day={day}/>
                    })
                }
                {
                    remainingDays.map( (day, index) => {
                        return <Circle color="grey" day={index+1}/>
                    })
                }
                </div>
            </CalendarLayout>
        </CalendarContainer>
        
    )
}

export default Calendar
