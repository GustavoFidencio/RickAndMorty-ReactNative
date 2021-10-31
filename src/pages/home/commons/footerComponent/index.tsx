import React, { memo } from "react"

import Colors from '../../../../assets/colors';
import { ContainerFooter, LoadBottom } from './styles';

interface Props {
    load: boolean
}

export const FooterComponent = memo(({ load }: Props) =>
    <ContainerFooter>
        {load && <LoadBottom size="small" color={Colors.primary} />}
    </ContainerFooter>
);