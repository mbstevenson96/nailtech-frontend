import Map from './Map'
import Layout from '../../../components/Layout';
import { Heading, Box } from '@chakra-ui/react';
function FindATech()
{
    return (
        <Layout>
            <Box><Heading>Connect</Heading></Box>
            <Map />
        </Layout>
    )
}

export default FindATech;