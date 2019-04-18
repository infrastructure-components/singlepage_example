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
        render={() => <div>Hello Code-Architect!</div>}
    >

        <Environment
            name="test"
            offlinePort={3000}
            domain="my.domain.com"
            certArn="arn:aws:acm:us-east-1:************:certificate/********-****-****-****-************"
        />


    </SinglePageApp>);