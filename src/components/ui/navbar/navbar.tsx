import { Row } from '@/components/ui/row/row'
import { TitlePage } from '@/components/ui/title-page/title-page'
import React from 'react'

type NavbarProps = {
}
const Navbar = ({ }: NavbarProps) => {
    return (
        <Row>
            <TitlePage title="Acumulado Grilla" />
        </Row>)
}

export { Navbar }