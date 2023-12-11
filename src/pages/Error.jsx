import React from 'react';
import { useHistory } from 'react-router';
import { ROUTES } from 'routes/ApplicationRoutes';
import { Content, Div, Layout, Span } from './layout/components/Components';
import { Button } from './ProductDetail';
import Head from './_components/Head';

const Error = () => {
    const history = useHistory();
    return (
        <Layout>
            <Head />
            <Content>
                <Div h100 justifyCenter center col>
                    <Span size={3} center>Oops! An error has occurred!</Span>
                    <Button onClick={() => history.push(ROUTES.home)} ><Span white>Back</Span></Button>
                </Div>
            </Content>
        </Layout>
    );
}
 
export default Error;