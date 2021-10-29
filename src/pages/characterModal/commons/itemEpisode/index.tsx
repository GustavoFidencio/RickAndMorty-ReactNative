import React, { memo } from "react"

import { Container, InfoLocation, LabelLocation } from './styles';

export const ItemEpisode = memo(({ info }) => {

    return (
        <Container>
            <InfoLocation>
                {info}
            </InfoLocation>
            <LabelLocation>
                Episódios
            </LabelLocation>
        </Container>
    )
})