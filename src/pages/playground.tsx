import React from 'react'

import GraphiQL from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { MainPageLayout } from '../layouts/index'


const fetcher = createGraphiQLFetcher({
    url: window.location.origin + '/playground',
});

const PlaygroundPage = () => {
    return (
        <MainPageLayout>
            <GraphiQL fetcher={fetcher} editorTheme='dracula' />
        </MainPageLayout>
    )
}

export default PlaygroundPage