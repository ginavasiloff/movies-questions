import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'

export class MoviesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const searchMovies = new lambda.Function(this, 'searchMoviesHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'searchMovies.handler',
      code: lambda.Code.fromAsset('lambdas')
    })

    new apigateway.LambdaRestApi(this, 'searchMovies', {
      handler: searchMovies,
      parameters: {}
    })
  }
}
