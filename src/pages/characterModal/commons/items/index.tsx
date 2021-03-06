import React, { memo } from "react"

import { Icon } from '../../../../helpers';
import Colors from '../../../../assets/colors';
import { Container, InfoLocation, LabelLocation, ContainerIconLabel } from './styles';

interface Props {
    info: string,
    label: string
}

export const Items = memo(({ info, label }: Props) =>
    <Container>
        <ContainerIconLabel >
            <Icon
                size={23}
                lib={'Ionicons'}
                name={'location'}
                color={Colors.primary}
            />
            <LabelLocation>
                {label}
            </LabelLocation>
        </ContainerIconLabel>
        <InfoLocation>
            {info}
        </InfoLocation>
    </Container>
)