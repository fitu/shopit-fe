import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ReactElement } from 'react';

import styles from './userDetails.module.scss';

const getRoute = (userId: string) => ({
    pathname: '/products/[id]',
    query: { id: userId },
});

interface Props {
    userId?: string;
}

const UserDetailsPage = ({ userId }: Props): ReactElement => {
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
