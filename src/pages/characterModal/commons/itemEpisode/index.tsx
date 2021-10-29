import React, { memo } from "react"

import { Container, InfoLocation, LabelLocation } from './styles';

interface Props {
    info: number,
}

export const ItemEpisode = memo(({ info }: Props) =>
    <Container>
        <InfoLocation>
            {info}
        </InfoLocation>
        <LabelLocation>
            Episódios
        </LabelLocation>
    </Container>
)