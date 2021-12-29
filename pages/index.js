import React from 'react'
import { Calendar, Description } from '../components'

const Layout = ({children}) => {
    return (
        <div className="relative w-full h-full grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2">
            {children}
        </div>
    )
}
const CalendarLayout = ({children}) => {
    return (
        <div class="h-full border col-span-1 row-span-1">{children}</div>
    )
}

const DescriptionLayout = ({children}) => {
    return (
        <div class="border col-span-1 row-span-1">{children}</div>
    )
}

function index() {
    return (
        <Layout>
            <CalendarLayout>
                <Calendar/>
            </CalendarLayout>
            <DescriptionLayout>
                <Description/>
            </DescriptionLayout>
        </Layout>
    )
}

export default index
