import { getSession } from 'next-auth/react';

export default async function session(req, res) {
    const session = await getSession({ req });

    if (session && session.user.role) {
        res.status(200).json({ admin: true });
    } else {
        res.status(200).json({ admin: false });
    }
}