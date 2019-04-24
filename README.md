# Infrastructure-Components: SinglePageApp-Example

**Create Your Serverless React App**

This project serves as a minimum example of how to create a **Serverless React App** with
[infrastructure-components](https://github.com/infrastructure-components/infrastructure-components).

## Getting started

### Installation

Fork or clone [this repository](https://github.com/infrastructure-components/singlepage_example) and run `npm install`.

### Develop Your App

The file `src/index.tsx` serves as entry point of your app. It exports a `SinglePagecApp` component as default.
This component contains all the configuration you need:

- stackName: the (arbitrary) name of your app, please use only lower case characters and hyphens for the name serves as identifier
within AWS
- buildPath: the relative path to the folder within your project, where to put the build-resources, e.g. "build". You may
want to add this name to your .gitignore file to keep your repository free from compiled files.
- region: the AWS-region you want your infrastructure to reside after deployment, e.g. 'us-east-1'

Your SinglePageApp contains a `Route`-component that specifies the path at runtime and the React-component to be rendered.
In this case, we render a simple `div`-element. But you can render any React-component.

In order to deploy your app to AWS, you need to specify at least one `<Environment/>` within your `SinglePageApp`-Component.
The `Environment` can have the following properties:

- name: the (arbitrary) name of your environment, please use only lower case characters and hyphens for the name serves
 as identifier within AWS
- domain: (optional) a domain that you own and configured in your AWS account, e.g. "my.domain.com"
- certArn: (optional, required if domain used) the ARN of the certificate that covers your domain
e.g. `arn:aws:acm:us-east-1:************:certificate/********-****-****-****-************`



### Build

Simply use `npm run build` to build your app. Your `package.json` defines this command (`scripts build src/index.tsx`).
As you can see, this points the entry-point of your app.

**NOTE**: Running the `build`-command adds further scripts to your `package.json`: `${webapp-id}`,
`deploy-${env-name}`, `domain-${env-name}`.

### Run your WebApp in Hot-Development-Mode

When you develop a React-App, you may want to see your changes directly. Use the script `npm run ${stackname}`.
This starts the webpack-hot-middleware.

Open your the url `localhost:3000` in a browser.

Your changes become effective once you reload the browser-page. Have a look at the output of
your console to not miss any error messages.


### Deploy your App to AWS

If you specified an `Environment` in your app, the `build` command adds a script `deploy-{env-name}`.
This command `npm run deploy-{env-name}` deploys your app to AWS. The script displays the url of your deployed app, e.g.
`http://{stackname}-{env-name}.s3-website-{region}.amazonaws.com`


You must specify the credentials of a programmatic AWS account in your `.env` file, like:

```
AWS_ACCESS_KEY_ID=****
AWS_SECRET_ACCESS_KEY=****
```

This account needs to have at least the permissions of the following policy:

```
{
    "Statement": [
        {
            "Action": [
                "s3:*",
                    "apigateway:*",
                    "lambda:*",
                    "logs:*",
                    "cloudformation:*",
                    "cloudfront:*",
                    "acm:ListCertificates",
                    "route53:ListHostedZones",
                    "route53:ListResourceRecordSets",
                    "route53:ChangeResourceRecordSets",
                    "route53:GetChange",
                    "iam:CreateRole",
                    "iam:DeleteRole",
                    "iam:DeleteRolePolicy",
                    "iam:GetRole",
                    "iam:PassRole",
                    "iam:PutRolePolicy",
                    "execute-api:ManageConnections",
                    "cloudfront:UpdateDistribution"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ],
    "Version": "2012-10-17"
}
```

## Help and Support

Have a look at our [documentation](https://infrastructure-components.readthedocs.io).

Infrastructure-Components are under active development. If you find a bug or need support of any kind,
please have a look at our [Spectrum-Chat](https://spectrum.chat/infrastructure).

Further, we frequently publish descriptions and tutorials on new features on [Medium.com](https://medium.com/@fzickert).