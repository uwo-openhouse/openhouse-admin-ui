

// eslint-disable-next-line import/prefer-default-export
export const getBackEndURL = () => process.env.REACT_APP_BACKEND_URL;


export const handleRequestError = (response) => {
    // TODO handle auth
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const pullOutJson = response => response.json();
