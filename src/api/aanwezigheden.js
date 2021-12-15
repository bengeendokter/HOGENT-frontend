import {axios} from '.';

export const getAllAanwezigheden = async (dagid) =>
{
    const data = await axios().get(
        `aanwezigheden/dag/${dagid}`,
        {
            params: {
                limit: 25,
                offset: 0,
            }
        }
    );
    return data;
}

export const getAanwezigheidById = async (id) =>
{
    const {data} = await axios().get(`aanwezigheden/${id}`);
    return data;
}

export const createAanwezigheid = async ({
    dagid, lidid, aanwezig
}) =>
{
    const {data} = await axios().post(`aanwezigheden`, {
        dagid, lidid, aanwezig
    });
    return data;
};

export const updateAanwezigheid = async (id, {
    dagid, lidid, aanwezig
}) =>
{
    const {data} = await axios().put(`aanwezigheden/${id}`, {
        dagid, lidid, aanwezig
    });
    return data;
};

export const deleteAanwezigheid = async (id) =>
{
    const {data} = await axios().delete(`aanwezigheden/${id}`);
    return data;
};