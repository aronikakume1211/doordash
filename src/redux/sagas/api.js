import { apiBase } from "../../utility/constants";

export const getLocations = (search='mumbai') => {
    fetch(`${apiBase}${search}&types=`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
}