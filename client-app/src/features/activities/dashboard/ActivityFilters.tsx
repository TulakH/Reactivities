import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";


export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: '26px' }}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Actvities' />
                <Menu.Item content="I'm going" />
                <Menu.Item content="i'm hosting" />
            </Menu>
            <Header />

            <Header icon='calendar' attached color='teal' content='Calendar' />
            <Calendar />
        </>

    )
}