import {axios} from '.';

export const getAllLeden = async () =>
{
    const data = await axios.get(
        'leden',
        {
            params: {
                limit: 25,
                offset: 0,
            }
        }
    );
    return data;
}

export const getLidById = async (id) =>
{
    const {data} = await axios.get(`leden/${id}`);
    return data;
}

export const createLid = async ({
    voornaam,
    achternaam
}) =>
{
    const {data} = await axios.post(`leden`, {
        voornaam,
        achternaam
    });
    return data;
};

export const deleteLid = async (id) =>
{
    const {data} = await axios.delete(`leden/${id}`);
    return data;
};