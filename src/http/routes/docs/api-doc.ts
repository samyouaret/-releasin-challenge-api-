/**
 * Definition doc of swagger/openapi
 */
export const apiDoc = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Product Mangement',
        description: 'Product Mangement REST API',
        contact: {
            name: 'Samy Ouaret',
            email: 'samyouaret13@gmail.com',
            url: 'https://samyouaret.com/'
        },
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'Local server'
        },
        {
            url: 'http://20.127.55.150:3000/api',
            description: 'Testing server'
        },
    ],
};