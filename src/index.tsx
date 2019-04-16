import * as React from 'react';

import {
    Environment,
    SinglePageApp
} from "infrastructure-components";


export default (
    <SinglePageApp
        stackName = "spa-example"
        buildPath = 'build'
        region='eu-west-1'
        render={() => <div>Hello Single Page App</div>}
    >

        <Environment
            name="dev"
            offlinePort={3000}
        />

        <Environment
            name="prod"
            domain="www.infrastructure-components.com"
        />

    </SinglePageApp>);