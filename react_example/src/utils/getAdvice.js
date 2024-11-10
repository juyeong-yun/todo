import { kadvice } from 'kadvice';

export const getOneAdvice = async () => {
    try {
        const advice = await kadvice.getOne();
        return advice;
    } catch (error) {
        console.error("Error fetching one advice:", error);
        return null;
    }
};