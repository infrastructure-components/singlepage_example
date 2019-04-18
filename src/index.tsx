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
        render={() => <div>Hello Infrastructure-Components!</div>}
    >

        <Environment
            name="dev"
            domain="my.domain.com"
            certArn="arn:aws:acm:us-east-1:************:certificate/********-****-****-****-************"
        />


    </SinglePageApp>);