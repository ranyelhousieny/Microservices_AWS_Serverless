const AWS = require( 'aws-sdk' );

AWS.config.update( { region: 'us-east-1' } );

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.get( {
    TableName: 'ProductCatalog',
    Key: {
        Id: 202
    }
}, ( err, data ) => {
    console.log( data );
} );



