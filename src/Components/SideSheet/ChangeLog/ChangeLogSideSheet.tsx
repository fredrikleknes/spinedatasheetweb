import React, { FC } from "react"
import styled from "styled-components"
import {
 Button, Typography, Icon, Avatar, Accordion,
} from "@equinor/eds-core-react"
import { external_link } from "@equinor/eds-icons"
import { ViewContext } from "../../../Context/ViewContext"
import Card from "../Components/Card"
import Table from "../Components/Table"
import TabsTitle from "../Components/TabsTitle"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 15px;
`

const Title = styled(Typography)`
    margin-top: 25px;
`

const Header = styled.div`
    margin: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const History = styled(Accordion)`
    margin-top: 15px;
`
const HistoryHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    & p {
        margin-left: 15px;
    }
`
const Panel = styled(Accordion.Panel)`
    min-height: 0;
`

const ChangeLogSideSheet: FC = () => {
    const { activeTagData } = React.useContext(ViewContext)

    if (!activeTagData) {
        return null
    }

    const dummyRevisionHistory = [
        "1. may 2023, Revision 1",
        "2. may 2023, Revision 2",
        "3. may 2023, Revision 3",
        "4. may 2023, Revision 4",
    ]

    return (
        <Container>
            <Card>
                <TabsTitle>CHANGELOG</TabsTitle>
                <History chevronPosition="right">
                    <Accordion.Item>
                        <Accordion.Header>
                            <HistoryHeader>
                                <Avatar alt="avatar" size={32} src="https://i.imgur.com/UM3mrju.jpg" />
                                <Typography variant="body_short">
                                    Carl Contractor sent first revision equipment specs
                                </Typography>
                            </HistoryHeader>
                        </Accordion.Header>
                        {dummyRevisionHistory.map((revision) => (
                            <Panel key={revision}>
                                <Typography variant="body_short">
                                    {revision}
                                </Typography>
                            </Panel>
                        ))}
                    </Accordion.Item>
                </History>
            </Card>
            <Card>
                <Header>
                    <Typography variant="h5">
                        PRODUCT INFORMATION
                    </Typography>
                    <Button variant="ghost">
                        View in EqHub
                        <Icon data={external_link} />
                    </Button>
                </Header>

                <Table data={{
                        Manufacturer: "Emerson",
                        Model: "Rosemount 3051S",
                        Type: "Pressure transmitter",
                        "Serial number": "123456789",
                        "Tag number": "123456789",
                    }}
                />
            </Card>
            <Card>
                <Table
                    title="PERFORMANCE"
                    data={{
                        Manufacturer: "Emerson",
                        Model: "Rosemount 3051S",
                        Type: "Pressure transmitter",
                        "Serial number": "123456789",
                        "Tag number": "123456789",
                    }}
                />
            </Card>
            <Card>
                <Table
                    title="BODY/ELEMENT/SENSOR"
                    data={{
                        Manufacturer: "Emerson",
                        Model: "Rosemount 3051S",
                        Type: "Pressure transmitter",
                        "Serial number": "123456789",
                        "Tag number": "123456789",
                    }}
                />
            </Card>
        </Container>
    )
}

export default ChangeLogSideSheet
