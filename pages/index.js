import * as React from 'react'
import stylesheet from 'antd/dist/antd.min.css'
import { Table, Layout } from 'antd'
import Head from 'next/head'
import {data, columns} from '../data/table'

export default class App extends React.Component {
    render () {
        return <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            </Head>

            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: 5200, y: '100vh' }}
                pagination={false}
            />
        </Layout>;
    }
}
