import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

function FirstPost() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>First Post</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(
                            `script loaded correctly, window.FB has been populated`
                        )
                    }
                />

                <Link href="/">Go to home page</Link>
            </div>
        </Layout>
    );
}

export default FirstPost;
