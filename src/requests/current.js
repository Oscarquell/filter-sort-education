import axios from "axios";

export const getCurrent = async () => {
    const token = 'MIC2wZtFA16XoNUCoMbZMxMdG8T7mTq9mmlKzLgO9e36a8fb';
    const response = await axios.get('https://data.fx.kg/api/v1/current', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}