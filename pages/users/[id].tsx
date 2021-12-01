import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ReactElement } from 'react';
import useSWR from 'swr';

import styles from './userDetails.module.scss';

const getRoute = (userId: string) => ({
    pathname: '/products/[id]',
    query: { id: userId },
});

interface Props {
    userId?: string;
}

const UserDetailsPage = ({ userId }: Props): ReactElement => {
    // const { data, error } = useSWR('https://foo.bar', async (url) => {
    //     const response = await fetch(url);
    //     return response.json();
    // });

    // if (error) {
    //     return <h1>Error!</h1>;
    // }

    // if (!data) {
    //     return <h1>NoData</h1>;
    // }

    return (
        <div className={styles.container}>
            {userId}
        </div>
    );
};

const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {
            userId: '123',
        },
    };
};

UserDetailsPage.displayName = 'UserDetailsPage';

export { getRoute, getServerSideProps };
export default UserDetailsPage;
