import {axios} from '.';

export const getAllDagen = async () =>
{
    const data = await axios.get(
        'dagen',
        {
            params: {
                limit: 25,
                offset: 0,
            }
        }
    );
    return data;
}

export const createDag = async ({
    id
}) =>
{
    const {data} = await axios.post(`dagen`, {id});
    return data;
};

export const deleteDag = async (id) =>
{
    await axios.delete(`dagen/${id}`);
};