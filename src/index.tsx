import * as React from 'react';

import {
    Environment,
    Route,
    SinglePageApp
} from "infrastructure-components";


export default (
    <SinglePageApp
        stackName = "spa-example"
        buildPath = 'build'
        region='eu-west-1'>

        <Environment
            name="dev"
            domain="my.domain.com"
            certArn="arn:aws:acm:us-east-1:************:certificate/********-****-****-****-************"
        />

        <Route
            path='/'
            name='Infrastructure-Components'
            render={()=><div>Hello Infrastructure-Components!</div>}
        />


    </SinglePageApp>);