import { kadvice } from 'kadvice';

export const getAdvice = () => {
    try {
        const adviceApi = kadvice.getOne();
        return adviceApi;
    } catch (error) {
        console.error('Failed to upload advice: ', error);
        return null;
    }
};
